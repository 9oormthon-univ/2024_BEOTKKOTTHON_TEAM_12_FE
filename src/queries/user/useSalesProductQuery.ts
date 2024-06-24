import { useInfiniteQuery } from '@tanstack/react-query';
import USER_API from 'apis/userApi';

const getSalesProducts = async (pageParam: number) => {
  try {
    const response = await USER_API.GET.salesProducts(pageParam);
    console.log('판매중인 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('판매중 데이터 불러오기 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useSalesProductQuery = () => {
  const salesProductQuery = useInfiniteQuery({
    queryKey: ['user', 'sales-product'],
    queryFn: ({ pageParam }) => getSalesProducts(pageParam),
    select: (data) => ({
      pagesData: data?.pages.flatMap((page) => page.content),
      pageParams: data?.pageParams,
      totalElements: data?.pages?.[0]?.totalElements,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) return lastPage.number + 1;
      return undefined;
    },
  });

  return salesProductQuery;
};
