import { useInfiniteQuery } from '@tanstack/react-query';
import USER_API from 'apis/userApi';

const getBlockUserList = async (pageParam: number) => {
  try {
    const response = await USER_API.GET.blockUserList(pageParam);
    console.log('차단한 사용자 목록 불러오기 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('차단한 사용자 목록 불러오기 실패:', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useBlockUserQuery = () => {
  return useInfiniteQuery({
    queryKey: ['user', 'block-user'],
    queryFn: ({ pageParam }) => getBlockUserList(pageParam),
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
};
