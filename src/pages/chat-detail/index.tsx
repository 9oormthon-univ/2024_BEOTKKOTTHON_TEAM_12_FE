import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
import userImage from 'assets/images/wear_profile.svg';
import defaultImg from 'assets/images/product-default-img.png';
import {
  BoxKebabList,
  Button,
  ChatInput,
  ChatMessage,
  ChatScreen,
  Header,
  ProductInfo,
  TextLabel,
} from 'components/index';
import arrow from 'assets/icons/arrow.svg';
import kebab from 'assets/icons/kebab.svg';
import productImage from 'assets/images/product-default-img.png';
import { useEffect, useRef, useState } from 'react';
import { levelUrlArr } from 'utils/levelUrlArr';
import { instance } from 'apis';

import SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

interface Message {
  id: number;
  chat_rood_id: number;
  message: string | File;
  timestamp: string;
  isMine: boolean;
  profilePic: string;
}

interface ProductType {
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
  const { productId, chatRoomId, isWear } = location.state;
  console.log(chatRoomId, productId);
  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType>({
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
    const serverUrl = `${process.env.REACT_APP_SOCKET_SERVER_URL}/ws-stomp`;

    const webSocketFactory = () => {
      return new SockJS(serverUrl);
    };

    client.current = Stomp.over(webSocketFactory);
    console.log('client.current:', client.current);
    client.current.connect(
      {},
      () => {
        console.log('연결 성공');
        client.current?.subscribe(`/sub/api/chat/room/${chatRoomId}`, (message) => {
          console.log('받은메세지', message);
          // 메시지 처리 로직
        });
      },
      (error: any) => {
        console.error('연결 실패:', error);
      }
    );
  };

  useEffect(() => {
    if (!isWear) {
      connectHandler();
    }
  }, [chatRoomId]);

  const handleSend = (message: File | string) => {
    try {
      if (!message) return;
      const newMessage = {
        id: messages.length + 1,
        chat_rood_id: chatRoomId,
        message: message,
        timestamp: new Date().toLocaleTimeString().slice(0, 7),
        isMine: true,
        profilePic: otherUser.profile_image,
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

  const showNotification = (message: any) => {
    // 브라우저의 Notification API를 사용하여 알림을 표시
    if (Notification.permission === 'granted') {
      new Notification('새로운 채팅 메시지', {
        body: message.content,
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('새로운 채팅 메시지', {
            body: message.content,
          });
        }
      });
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
    if (isWear) return;
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
    if (!isWear) {
      getChatData();
    }
  }, [isWear]);

  const WearMessage: Message[] = [
    {
      id: 1,
      chat_rood_id: 1,
      message:
        '안녕하세요, 등록하신 <ZARA 코트> 상품이\n 5일 동안 거래되지 않고 있어요.\n\n 웨어와 함께  필요한 곳에 기부하는건 어떨까요? 아래 기부하기 버튼을 누르시면 기부절차와 방법을 알려드릴게요🌱',
      timestamp: '10:00',
      isMine: false,
      profilePic: userImage,
    },
  ];
  return (
    <>
      {isWear ? (
        <div>
          {' '}
          <S.Container>
            <S.ChatFixedHeader>
              <Header>
                <S.BtnLeft
                  src={arrow}
                  className="left"
                  alt="btn-back"
                  onClick={() => navigate(-1)}
                />
                <S.NickNameContainer>
                  <TextLabel text={'팀 WEAR'} size={18} $weight={700} />
                </S.NickNameContainer>
              </Header>
            </S.ChatFixedHeader>
            <S.ChatScreenFixed>
              <ChatScreen messages={WearMessage} userImage={userImage} />
            </S.ChatScreenFixed>

            <S.FooterFixed>
              <Button
                width={'100%'}
                $padding={'16px 20px'}
                children={'기부하기'}
                $bgcolor={'var(--green-primary)'}
                color={'white'}
                handleOnClick={() => navigate('/donation')}
              />
            </S.FooterFixed>
          </S.Container>
        </div> // isWear가 true일 때 렌더링되는 내용
      ) : (
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
      )}
    </>
  );
};
export default ChatDetail;
