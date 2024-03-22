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
import { ProductListItem } from 'src/types/types';
import productImg1 from '@assets/images/product-image1.svg';
import { useState } from 'react';
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
    {
      id: '4',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '5',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '6',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },

    {
      id: '7',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '8',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '9',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '10',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '11',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '12',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
  ]);

  const product: ProductListItem = {
    id: 5,
    price: 10000,
    product_name: '안입는 옷 처분해요',
    product_status: '아주 좋아요',
    post_status: 'soldOut',
    product_image: productImg1,
  };

  const otherUser = '김스옹';

  const handleSend = (message: File | string) => {
    if (!message) return;
    const newMessage = {
      id: (messages.length + 1).toString(),
      content: message,
      timestamp: new Date().toLocaleTimeString().slice(0, 7),
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

  //const { id } = useParams();
  return (
    <S.Container>
      <S.ChatFixedHeader>
        <Header>
          <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={() => navigate(-1)} />
          <S.NickNameContainer>
            <TextLabel text={otherUser} size={18} $weight={700} />
            <img src={levelUrlArr('새싹')} alt="level" />
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
          <ChatScreen messages={messages} />
        </S.SectionScroll>
      </S.Content>
      <ChatInput handleImageChange={handleImageChange} handleSend={handleSend} />
    </S.Container>
  );
};

export default ChatDetail;
