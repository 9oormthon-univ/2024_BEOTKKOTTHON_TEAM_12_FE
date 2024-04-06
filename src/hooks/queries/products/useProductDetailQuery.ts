import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { productDetailDummyData } from 'data/product';
import { useEffect } from 'react';
import { useProductActions } from 'store/product';

export const useProductDetailQuery = (id: string) => {
  const { setProduct } = useProductActions();

  const getProductDetailData = async (id: string | undefined) => {
    try {
      const response = await instance.get(`/products/${id}`);
      console.log('데이터 가져오기 성공', response);
      return response.data;
    } catch (e) {
      console.log('데이터 가져오기 실패', e);
      const productDetailItem = productDetailDummyData();
      return productDetailItem;
    }
  };

  const productDetailQuery = useQuery({
    queryKey: ['products', 'product-detail', id],
    queryFn: () => getProductDetailData(id),
  });

  useEffect(() => {
    if (productDetailQuery.data) {
      setProduct(productDetailQuery.data);
    }
  }, [productDetailQuery.data]);

  return productDetailQuery;
};
