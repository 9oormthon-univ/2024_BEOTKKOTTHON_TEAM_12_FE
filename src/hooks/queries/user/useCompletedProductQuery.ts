import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getCompletedProducts = async () => {
  try {
    const response = await instance.get(`/users/myProducts/soldOut/${userId}?pageNumber=0`);
    console.log('판매완료 상품 불러오기 성공:', response.data.content);
    return response.data.content;
  } catch (error) {
    console.log('판매완료 데이터 불러오기 실패', error);
    throw error;
  }
};

export const useCompletedProductQuery = () => {
  const completedProductQuery = useQuery({
    queryKey: ['user', 'completed-product'],
    queryFn: getCompletedProducts,
  });

  return completedProductQuery;
};
