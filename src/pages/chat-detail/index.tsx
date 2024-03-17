import { useNavigate } from 'react-router-dom';
import * as S from './style';
import defaultImg from '@assets/images/product-default-img.png';
import { ChatInput, ChatScreen, Header, ProductInfo, TextLabel } from '@components/index';
import arrow from '@assets/icons/arrow.svg';
import kebab from '@assets/icons/kebab.svg';
import { Product } from 'src/types/types';

const ChatDetail = () => {
  const navigate = useNavigate();

  const product: Product = {
    id: 8,
    product_name: 'Catnip',
    price: 8,
    product_image: [
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
    category_id: 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus',
    wish: '193.148.54.13',
    count: '144.16.105.89',
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
