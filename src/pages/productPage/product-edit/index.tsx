import { FormTrade, Header } from 'components/index';
import * as S from './styled';
import close from 'assets/icons/close_large.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { TradeFormData } from 'types/types';
import { useFormData, useFormDataActions } from 'store/formData';
import { useEffect } from 'react';

const putProductEditData = async (id: string, sendData: TradeFormData) => {
  try {
    const response = await instance.put(`/products/edit/${userId}/${id}`, sendData);
    console.log('상품 수정에 성공했습니다.', response);
    alert('상품 수정에 성공했습니다.');
    return response.data;
  } catch (error) {
    console.log('상품 수정에 실패했습니다.', error);
    alert('상품 수정에 실패했습니다.');
  }
};

const getProductDetailData = async (id: string | undefined) => {
  try {
    const response = await instance.get(`/products/${id}`);
    console.log('데이터 가져오기 성공', response);
    return response.data;
  } catch (e) {
    console.log('데이터 가져오기 실패', e);
  }
};

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formData = useFormData();
  const { receiveData, changeImgFileToString } = useFormDataActions();
  const productDetailQuery = useQuery({
    queryKey: ['products', 'product-detail'],
    queryFn: () => getProductDetailData(id),
  });

  const productEditMutation = useMutation({
    mutationFn: (sendData: TradeFormData) => putProductEditData(id as string, sendData),
  });

  useEffect(() => {
    receiveData(productDetailQuery.data);
    changeImgFileToString(productDetailQuery.data.product_image);
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
        <FormTrade
          formData={formData}
          handleSubmitAction={productEditMutation.mutate}
          btnText={'수정 완료'}
        />
      </S.Content>
    </>
  );
};

export default ProductEdit;
