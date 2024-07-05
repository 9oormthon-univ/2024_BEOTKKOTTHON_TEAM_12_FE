import { FormTrade, Header } from 'components/index';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormDataActions, useProductFormData } from 'store/productFormData';
import { AiOutlineClose } from 'react-icons/ai';
import { useEdit, useProductEdit } from 'service/product/useProductService';
import { useProductListActions } from 'store/productListData';
import { useEffect } from 'react';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formData = useProductFormData();
  const { setActiveCategory } = useProductListActions();
  const { receiveProductFormData } = useFormDataActions();
  const { data: editData, status } = useProductEdit(id as string);
  const { mutate: editProductMutation } = useEdit(id as string);

  useEffect(() => {
    if (editData) {
      receiveProductFormData(editData);
      setActiveCategory(editData.category_name);
    }
  }, [editData]);

  return (
    <>
      <Header>
        <p>등록한 글 수정하기</p>
        <AiOutlineClose className="right" onClick={() => navigate(-1)} />
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
