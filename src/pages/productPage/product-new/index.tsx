import { FormTrade, Header } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductListActions } from 'store/productListData';
import { AiOutlineClose } from 'react-icons/ai';
import { useNewProduct } from 'service/product/useProductService';

const ProductNew = () => {
  const navigate = useNavigate();
  const { setActiveCategory } = useProductListActions();
  const { mutate: newProductMutation } = useNewProduct();

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
