import { FormTrade, Header } from '@components/index';
import * as S from './style';
import close from '@assets/icons/close_large.svg';
import { useNavigate } from 'react-router-dom';

const ProductNew = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <section className="header">
        <Header>
          <p>상품 등록</p>
          <img src={close} className="right" alt="btn-close" onClick={() => navigate('/')} />
        </Header>
      </section>

      <section className="form">
        <FormTrade />
      </section>
    </S.Container>
  );
};

export default ProductNew;
