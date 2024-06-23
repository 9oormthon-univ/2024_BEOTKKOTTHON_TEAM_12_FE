import { useInfiniteQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

const getHiddenProducts = async (pageParam: number) => {
  try {
    const response = await instance.get(
      `/users/myProducts/private/${USER_ID}?pageNumber=${pageParam}`
    );
    console.log('숨김 상품 불러오기 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.log('숨김 상품 불러오기 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useHiddenProductQuery = () => {
  const hiddenProductQuery = useInfiniteQuery({
    queryKey: ['user', 'hidden-product'],
    queryFn: ({ pageParam }) => getHiddenProducts(pageParam),
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

  return hiddenProductQuery;
};
