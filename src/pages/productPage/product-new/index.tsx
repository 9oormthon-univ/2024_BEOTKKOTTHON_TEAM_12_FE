import { FormTrade, Header } from 'components/index';
import * as S from './style';
import close from 'assets/icons/close_large.svg';
import { useNavigate } from 'react-router-dom';
import { useNewProductMutation } from 'hooks/queries/products/useNewProductMutation';

const ProductNew = () => {
  const navigate = useNavigate();
  const { mutate: newProductMutation } = useNewProductMutation();

  return (
    <>
      <Header>
        <p>상품 등록</p>
        <img src={close} className="right" alt="btn-close" onClick={() => navigate(-1)} />
      </Header>

      <S.Content>
        <FormTrade handleSubmitAction={newProductMutation} btnText={'등록하기'} />
      </S.Content>
    </>
  );
};

export default ProductNew;
