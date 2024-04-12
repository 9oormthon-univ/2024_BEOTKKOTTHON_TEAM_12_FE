import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { productDetailDummyData } from 'data/product';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useProductActions } from 'store/product';

const getProductDetailData = async (productId: string) => {
  try {
    const response = await instance.get(`/products/${userId}/${productId}`);
    console.log('데이터 가져오기 성공', response);
    return response.data;
  } catch (e) {
    console.log('데이터 가져오기 실패', e);
    const productDetailItem = productDetailDummyData();
    return productDetailItem;
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
