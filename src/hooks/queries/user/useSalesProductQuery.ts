import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getSalesProducts = async () => {
  try {
    const response = await instance.get(`/users/myProducts/onSale/${userId}?pageNumber=0`);
    console.log('판매중인 상품 불러오기 성공:', response.data.content);
    return response.data.content;
  } catch (error: any) {
    if (error?.response?.status === 404) {
      return null;
    }

    console.log('판매중 데이터 불러오기 실패', error);
    throw error;
  }
};

export const useSalesProductQuery = () => {
  const salesProductQuery = useQuery({
    queryKey: ['user', 'sales-product'],
    queryFn: getSalesProducts,
  });

  return salesProductQuery;
};
