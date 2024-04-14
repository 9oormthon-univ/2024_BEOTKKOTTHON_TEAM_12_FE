import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductActions } from 'store/product';

const getProductDetailData = async (productId: string) => {
  try {
    const response = await instance.get(`/products/${userId}/${productId}`);
    console.log('데이터 가져오기 성공', response);
    return response.data;
  } catch (e: any) {
    console.log('데이터 가져오기 실패', e);
    throw new Error(e.response?.data?.message);
  }
};

export const useProductDetailQuery = (id: string) => {
  const { setProduct } = useProductActions();

  const productDetailQuery = useQuery({
    queryKey: ['products', 'product-detail', userId, id],
    queryFn: () => getProductDetailData(id),
  });

  useEffect(() => {
    if (productDetailQuery.data) {
      setProduct(productDetailQuery.data);
    }
  }, [productDetailQuery.data]);

  return productDetailQuery;
};
