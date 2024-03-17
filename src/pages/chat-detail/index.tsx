import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Product } from 'src/types/types';
import defaultImg from '@assets/images/product-default-img.png';
import { ChatInput, ChatScreen, Header, ProductInfo, TextLabel } from '@components/index';
import arrow from '@assets/icons/arrow.svg';
import kebab from '@assets/icons/kebab.svg';

const ChatDetail = () => {
  const navigate = useNavigate();
  const product: Product = {
    id: '1',
    name: 'H&M 티셔츠',
    price: 10000,
    time: '2021-08-01',
    state: '판매중',
    recievedImgUrl: [defaultImg],
  };

  const handleClickProduct = () => {
    navigate(`/product/${product.id}`);
  };
  //const { id } = useParams();
  return (
    <S.Container>
      <Header>
        <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={() => navigate('/')} />
        <TextLabel text="채팅" size={18} weight={700} />
        <img src={kebab} className="right" alt="btn-back" />
      </Header>
      <ProductInfo
        imageUrl={product.recievedImgUrl ? product.recievedImgUrl[0] : defaultImg}
        productName={product.name}
        price={product.price}
        onClick={handleClickProduct}
      />

      <S.Content>
        <ChatScreen />
      </S.Content>
      <ChatInput />
    </S.Container>
  );
};

export default ChatDetail;
