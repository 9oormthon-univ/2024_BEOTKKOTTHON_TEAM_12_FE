import { FormTrade, Header } from 'components/index';
import * as S from './style';
import close from 'assets/icons/close_large.svg';
import { useNavigate } from 'react-router-dom';
import { useFormData } from 'store/formData';
import { useNewProductMutation } from 'hooks/queries/products/useNewProductMutation';

const ProductNew = () => {
  const navigate = useNavigate();
  const formData = useFormData();
  const { mutate: newProductMutation } = useNewProductMutation();

  return (
    <>
      <Header>
        <p>상품 등록</p>
        <img src={close} className="right" alt="btn-close" onClick={() => navigate('/product')} />
      </Header>

      <S.Content>
        <FormTrade
          formData={formData}
          handleSubmitAction={newProductMutation}
          btnText={'등록하기'}
        />
      </S.Content>
    </>
  );
};

export default ProductNew;
