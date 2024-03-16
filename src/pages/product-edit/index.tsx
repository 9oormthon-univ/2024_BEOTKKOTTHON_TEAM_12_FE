import { FormTrade, Header } from '@components/index';
import * as S from './styled';
import close from '@assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <p>등록한 글 수정하기</p>
        <img
          src={close}
          className="right"
          alt="btn-close"
          onClick={() => navigate(`/product/${id}`)}
        />
      </Header>

      <S.Content>
        <FormTrade />
      </S.Content>
    </>
  );
};

export default ProductEdit;
