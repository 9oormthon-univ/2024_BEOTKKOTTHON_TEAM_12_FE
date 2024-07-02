import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import queryKeys from './queries';
import userService from './userService';

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => userService.GET.mypage(),
  });
}

export function useAccount() {
  return useQuery({
    queryKey: queryKeys.account(),
    queryFn: () => userService.GET.accountInfo(),
  });
}

export function useBlockList() {
  return useInfiniteQuery({
    queryKey: queryKeys.blockList(),
    queryFn: ({ pageParam = 0 }) => userService.GET.blockList(pageParam),
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
}
