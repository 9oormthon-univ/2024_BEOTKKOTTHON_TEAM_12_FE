import { FormTrade, Header } from '@components/index';
import * as S from './styled';
import close from '@assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <S.Container>
      <section className="header">
        <Header>
          <p>상품 등록</p>
          <img
            src={close}
            className="right"
            alt="btn-close"
            onClick={() => navigate(`/product/${id}`)}
          />
        </Header>
      </section>

      <section className="form">
        <FormTrade />
      </section>
    </S.Container>
  );
};

export default ProductEdit;
