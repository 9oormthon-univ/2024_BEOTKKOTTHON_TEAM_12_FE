import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { InfiniteQueryResponse } from 'types/common';

interface QueryConfig<T> {
  queryKey: any;
  queryFn: (context: QueryFunctionContext<any>) => Promise<InfiniteQueryResponse<T>>;
}

export function useCustomInfiniteQuery<T>({ queryKey, queryFn }: QueryConfig<T>) {
  return useInfiniteQuery({
    queryKey,
    queryFn,
    select: (data) => ({
      pagesData: data?.pages?.flatMap((page) => page.content),
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
