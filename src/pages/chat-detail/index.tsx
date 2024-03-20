import { useNavigate } from 'react-router-dom';
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
import { Product } from 'src/types/types';
import { useEffect, useRef, useState } from 'react';
import { levelUrlArr } from 'src/utils/levelUrlArr';

interface Message {
  id: string;
  content: string | File;
  timestamp: string;
  isMine: boolean;
  profilePic: string;
}

const ChatDetail = () => {
  const navigate = useNavigate();

  const [openKebab, setOpenKebab] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '안녕하세요!',
      timestamp: '오후 12:00',
      isMine: false,
      profilePic: '',
    },
    {
      id: '2',
      content: '구매하고싶어요!',
      timestamp: '오후 12:01',
      isMine: false,
      profilePic: '',
    },
    {
      id: '3',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
  ]);

  const product: Product = {
    id: 8,
    product_name: 'Catnip',
    price: 8,
    product_image_list: [
      'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/201x100.png/5fa2dd/ffffff',
    ],
    product_content:
      'suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'ultrices posuere cubilia curae nulla dapibus dolor vel est donec',
    is_private: true,
    category: 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus',
    wish: '193.148.54.13',
    count: '144.16.105.89',
  };

  const otherUser = '김스옹';

  const handleSend = (message: File | string) => {
    if (!message) return;
    const newMessage = {
      id: (messages.length + 1).toString(),
      content: message,
      timestamp: new Date().toLocaleTimeString().slice(0, 8),
      isMine: true,
      profilePic: '',
    };
    setMessages([...messages, newMessage]);
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

  const sectionScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustChatHeight = () => {
      if (sectionScrollRef.current) {
        const screenHeight = window.innerHeight;
        sectionScrollRef.current.style.paddingBottom = `${screenHeight * 0.3}px`;
      }
    };

    window.addEventListener('resize', adjustChatHeight);

    return () => {
      window.removeEventListener('resize', adjustChatHeight);
    };
  }, []);

  //const { id } = useParams();
  return (
    <S.Container>
      <Header>
        <S.BtnLeft
          src={arrow}
          className="left"
          alt="btn-back"
          onClick={() => navigate('/chat-home')}
        />
        <S.NickNameContainer>
          <TextLabel text={otherUser} size={18} weight={700} />
          <img src={levelUrlArr(1)} alt="level" />
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
        imageUrl={product.product_image_list ? product.product_image_list[0] : defaultImg}
        productName={product.product_name}
        price={product.price}
        onClick={handleClickProduct}
      />

      <S.Content>
        <S.SectionScroll ref={sectionScrollRef}>
          <ChatScreen messages={messages} />
        </S.SectionScroll>
      </S.Content>
      <ChatInput handleImageChange={handleImageChange} handleSend={handleSend} />
    </S.Container>
  );
};

export default ChatDetail;
