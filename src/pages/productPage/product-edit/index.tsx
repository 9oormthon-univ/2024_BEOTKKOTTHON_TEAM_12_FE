import { FormTrade, Header } from 'components/index';
import close from 'assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductFormData } from 'store/productFormData';
import { useEditProductMutation } from 'hooks/queries/products/useEditProductMutation';
import { useProductEditQuery } from 'hooks/queries/products/useProductEditQuery';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formData = useProductFormData();
  const { status } = useProductEditQuery(id as string);
  const { mutate: editProductMutation } = useEditProductMutation(id as string);

  return (
    <>
      <Header>
        <p>등록한 글 수정하기</p>
        <img src={close} className="right" alt="btn-close" onClick={() => navigate(-1)} />
      </Header>

      <FormTrade
        handleSubmitAction={() => editProductMutation(formData)}
        btnText={'수정 완료'}
        status={status}
      />
    </>
  );
};

export default ProductEdit;
