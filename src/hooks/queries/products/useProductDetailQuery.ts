import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { useEffect } from 'react';
import { useProductActions } from 'store/product';

export const useProductDetailQuery = (id: string) => {
  const { setProduct, changeStrToArr } = useProductActions();

  const getProductDetailData = async (id: string | undefined) => {
    try {
      const response = await instance.get(`/products/${id}`);
      console.log('데이터 가져오기 성공', response);
      return response.data;
    } catch (e) {
      console.log('데이터 가져오기 실패', e);
    }
  };

  const productDetailQuery = useQuery({
    queryKey: ['products', 'product-detail', id],
    queryFn: () => getProductDetailData(id),
  });

  useEffect(() => {
    if (productDetailQuery.data) {
      setProduct(productDetailQuery.data);
      changeStrToArr(productDetailQuery.data.product_image);
    }
  }, [productDetailQuery.data]);

  return productDetailQuery;
};
