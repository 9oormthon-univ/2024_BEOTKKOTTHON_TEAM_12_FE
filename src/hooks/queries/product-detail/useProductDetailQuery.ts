import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';

export const useProductDetailQuery = (id: string) => {
  const getProductDetailData = async (id: string | undefined) => {
    try {
      const response = await instance.get(`/products/${id}`);
      console.log('데이터 가져오기 성공', response);
      return response.data;
    } catch (e) {
      console.log('데이터 가져오기 실패', e);
    }
  };

  return useQuery({
    queryKey: ['products', 'product-detail', id],
    queryFn: () => getProductDetailData(id),
  });
};
