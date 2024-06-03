import { FormTrade, Header } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useNewProductMutation } from 'queries/products/useNewProductMutation';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';
import { AiOutlineClose } from 'react-icons/ai';

const ProductNew = () => {
  const navigate = useNavigate();
  const { setActiveCategory } = useProductListActions();
  const { mutate: newProductMutation } = useNewProductMutation();

  useEffect(() => {
    setActiveCategory('');
  }, []);

  return (
    <>
      <Header>
        <p>상품 등록</p>
        <AiOutlineClose className="right" onClick={() => navigate(-1)} />
      </Header>

      <FormTrade handleSubmitAction={newProductMutation} btnText={'등록하기'} />
    </>
  );
};

export default ProductNew;
