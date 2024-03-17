import { useNavigate } from 'react-router-dom';
import * as S from './style';
import defaultImg from '@assets/images/product-default-img.png';
import { ChatInput, ChatScreen, Header, ProductInfo, TextLabel } from '@components/index';
import arrow from '@assets/icons/arrow.svg';
import kebab from '@assets/icons/kebab.svg';

const ChatDetail = () => {
  const navigate = useNavigate();
  const product = {
    id: 1,
    product_name: 'H&M 티셔츠',
    price: 10000,
    product_content: '',
    post_status: '판매중',
    product_image: [defaultImg],
  };

  const messages = [
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
      content: '안녕하세요!',
      timestamp: '오후 12:00',
      isMine: false,
      profilePic: '',
    },
    {
      id: '5',
      content: '구매하고싶어요!',
      timestamp: '오후 12:01',
      isMine: false,
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
      content: '안녕하세요!',
      timestamp: '오후 12:00',
      isMine: false,
      profilePic: '',
    },
    {
      id: '8',
      content: '구매하고싶어요!',
      timestamp: '오후 12:01',
      isMine: false,
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
      content: '안녕하세요!',
      timestamp: '오후 12:00',
      isMine: false,
      profilePic: '',
    },
    {
      id: '12',
      content: '구매하고싶어요!',
      timestamp: '오후 12:01',
      isMine: false,
      profilePic: '',
    },
    {
      id: '13',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '14',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
    {
      id: '15',
      content: '가능합니다!',
      timestamp: '오후 12:01',
      isMine: true,
      profilePic: '',
    },
  ];

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
  };
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
        <TextLabel text="채팅" size={18} weight={700} />
        <img src={kebab} className="right" alt="btn-back" />
      </Header>
      <ProductInfo
        imageUrl={product.product_image ? product.product_image[0] : defaultImg}
        productName={product.product_name}
        price={product.price}
        onClick={handleClickProduct}
      />

      <S.Content>
        <S.SectionScroll>
          <ChatScreen messages={messages} />
        </S.SectionScroll>
      </S.Content>
      <ChatInput />
    </S.Container>
  );
};

export default ChatDetail;
