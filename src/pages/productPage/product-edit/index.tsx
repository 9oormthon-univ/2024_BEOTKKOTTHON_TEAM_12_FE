import { FormTrade, Header } from 'components/index';
import * as S from './styled';
import close from 'assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormData, useFormDataActions } from 'store/formData';
import { useEffect } from 'react';
import { useProductDetailQuery } from 'hooks/queries/products/useProductDetailQuery';
import { useEditProductMutation } from 'hooks/queries/products/useEditProductMutation';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formData = useFormData();
  const { receiveData } = useFormDataActions();
  const productDetailQuery = useProductDetailQuery(id as string);
  const { mutate: editProductMutation } = useEditProductMutation(id as string);

  useEffect(() => {
    receiveData(productDetailQuery.data);
    // changeImgFileToString(productDetailQuery.data.product_image);
    console.log('formData', formData);
  }, []);

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
        <FormTrade handleSubmitAction={() => editProductMutation(formData)} btnText={'수정 완료'} />
      </S.Content>
    </>
  );
};

export default ProductEdit;
