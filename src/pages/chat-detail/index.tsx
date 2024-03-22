import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import defaultImg from '@assets/images/product-default-img.png';
import {
  BoxKebabList,
  ChatInput,
  ChatScreen,
  Header,
  ProductInfo,
  TextLabel,
} from '@components/index';
import arrow from '@assets/icons/arrow.svg';
import kebab from '@assets/icons/kebab.svg';
import productImage from '@assets/images/product-default-img.png';
import { useEffect, useRef, useState } from 'react';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { instance } from 'src/apis';

import SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

interface Message {
  id: string;
  content: string | File;
  timestamp: string;
  isMine: boolean;
  profilePic: string;
}

interface ProductInfo {
  id: number;
  price: number;
  product_name: string;
  product_image: string;
}

interface CustomerInfo {
  id: number;
  nickname: string;
  level: string;
  profile_image: string;
}

const ChatDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId, chatRoomId } = location.state;
  console.log(chatRoomId, productId);
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductInfo>({
    id: productId,
    price: 15000,
    product_name: 'string',
    product_image: productImage,
  });
  const [otherUser, setOtherUser] = useState<CustomerInfo>({
    id: 1,
    nickname: '김스옹',
    level: '씨앗',
    profile_image: defaultImg,
  });
  const [messages, setMessages] = useState<Message[]>([]);

  // Stomp의 CompatClient 객체를 참조하는 객체 (리렌더링에도 유지를 위해 useRef 사용)
  // Stomp라이브러리와 소켓 연결을 수행하는 cliet객체에 접근할 수 있게 해준다.
  const client = useRef<CompatClient | null>(null);

  const connectHandler = () => {
    const serverUrl = `${import.meta.env.VITE_SERVER_URL}/ws-stomp`;

    const webSocketFactory = () => {
      return new SockJS(serverUrl);
    };

    client.current = Stomp.over(webSocketFactory);
    console.log('client.current:', client.current);
    client.current.connect(
      () => {
        // 첫 번째 인자로 빈 객체 전달
        console.log('연결 성공');
        client.current?.subscribe(`/sub/api/chat/room/${chatRoomId}`, (message) => {
          console.log(message);
          // 메시지 처리 로직
        });
      },
      (error: any) => {
        // 에러 핸들링 콜백
        console.error('연결 실패:', error);
      }
    );
  };

  useEffect(() => {
    connectHandler();
  }, [chatRoomId]);

  const handleSend = (message: File | string) => {
    try {
      if (!message) return;
      const newMessage = {
        id: (messages.length + 1).toString(),
        content: message,
        timestamp: new Date().toLocaleTimeString().slice(0, 7),
        isMine: true,
        profilePic: '',
      };
      setMessages([...messages, newMessage]);
      if (typeof message === 'string' && client.current && client.current.connected) {
        client.current.send(
          `/pub/api/chat/message`,
          // JSON 형식으로 전송한다
          newMessage
        );
        console.log('메시지 전송 완료:', newMessage);
      }
    } catch (error) {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      handleSend(file);
    }
  };

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const getChatData = async () => {
    const response = await instance.get(
      `/chat/room/enter?roomId=${chatRoomId}&productId=${productId}`
    );
    console.log('채팅방 입장');
    setProduct({
      id: response.data.product_id,
      price: response.data.price,
      product_name: response.data.product_name,
      product_image: response.data.product_image,
    });
    setOtherUser({
      id: response.data.customer_id,
      nickname: response.data.seller_nick_name,
      level: response.data.seller_level,
      profile_image: response.data.seller_profile_image,
    });
  };

  useEffect(() => {
    getChatData();
  }, []);

  return (
    <S.Container>
      <S.ChatFixedHeader>
        <Header>
          <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={() => navigate(-1)} />
          <S.NickNameContainer>
            <TextLabel text={otherUser.nickname} size={18} $weight={700} />
            <img src={levelUrlArr(otherUser.level)} alt="level" />
          </S.NickNameContainer>
          <img
            src={kebab}
            className="right"
            alt="btn-back"
            onClick={() => {
              setOpenKebab(() => !openKebab);
              console.log('openKebab:', openKebab);
            }}
          />
        </Header>
        {openKebab && (
          <BoxKebabList>
            <p>차단하기</p>
            <p className="red">신고하기</p>
          </BoxKebabList>
        )}
        <ProductInfo
          imageUrl={product.product_image ? product.product_image : defaultImg}
          productName={product.product_name}
          price={product.price}
          onClick={handleClickProduct}
        />
      </S.ChatFixedHeader>

      <S.Content>
        <S.SectionScroll>
          <ChatScreen messages={messages} userImage={otherUser.profile_image} />
        </S.SectionScroll>
      </S.Content>
      <ChatInput handleImageChange={handleImageChange} handleSend={handleSend} />
    </S.Container>
  );
};

export default ChatDetail;
