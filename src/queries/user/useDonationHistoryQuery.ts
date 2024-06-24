import { useInfiniteQuery } from '@tanstack/react-query';
import USER_API from 'apis/userApi';

const getDonationHistory = async (pageParam: number, showCompletedOnly: boolean) => {
  const endPoint = showCompletedOnly ? `complete/` : ``;
  try {
    const response = await USER_API.GET.donationHistory(endPoint, pageParam);
    console.log('기부 내역 불러오기 성공:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('기부 내역 불러오기 실패:', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useDonationHistoryQuery = (showCompletedOnly: boolean) => {
  const donationHistoryQuery = useInfiniteQuery({
    queryKey: ['user', 'donation-history', showCompletedOnly],
    queryFn: ({ pageParam }) => getDonationHistory(pageParam, showCompletedOnly),
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

  return donationHistoryQuery;
};
