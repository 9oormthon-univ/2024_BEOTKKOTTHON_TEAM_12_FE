import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getDonationHistory = async (showCompletedOnly: boolean) => {
  const endPoint = showCompletedOnly ? `complete/` : ``;
  try {
    const response = await instance.get(`/users/myDonations/${endPoint}${userId}?pageNumber=0`);
    console.log('기부 내역 불러오기 성공:', response.data.content);
    return response.data.content;
  } catch (error: any) {
    console.error('기부 내역 불러오기 실패:', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useDonationHistoryQuery = (showCompletedOnly: boolean) => {
  const donationHistoryQuery = useQuery({
    queryKey: ['user', 'donation-history', showCompletedOnly],
    queryFn: () => getDonationHistory(showCompletedOnly),
  });

  return donationHistoryQuery;
};
