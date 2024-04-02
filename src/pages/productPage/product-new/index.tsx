import { FormTrade, Header } from 'components/index';
import * as S from './style';
import close from 'assets/icons/close_large.svg';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { TradeFormData } from 'types/types';

const postNewProductData = async (sendData: TradeFormData) => {
  try {
    const response = await instance.post(`/products/new/${userId}`, sendData);
    console.log('상품 등록에 성공했습니다.', response);
    alert('상품 등록에 성공했습니다.');
    return response.data;
  } catch (error) {
    console.log('상품 등록에 실패했습니다.', error);
    alert('상품 등록에 실패했습니다.');
  }
};

const ProductNew = () => {
  const navigate = useNavigate();
  const productDetailMutation = useMutation({
    mutationFn: postNewProductData,
  });

  return (
    <>
      <Header>
        <p>상품 등록</p>
        <img src={close} className="right" alt="btn-close" onClick={() => navigate('/product')} />
      </Header>

      <S.Content>
        <FormTrade handleSubmitAction={productDetailMutation.mutate} />
      </S.Content>
    </>
  );
};

export default ProductNew;
