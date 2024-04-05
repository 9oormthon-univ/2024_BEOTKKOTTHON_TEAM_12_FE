import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getCompletedDonationHistory = async () => {
  try {
    const response = await instance.get(`/users/myDonations/complete/${userId}`);
    console.log('기부 완료 내역 불러오기 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('기부 완료 내역 불러오기 실패:', error);
    return [
      {
        id: 5,
        date: '2024.03.20',
        clothes_count: 56,
        fashion_count: 2,
        is_donation_complete: true,
      },
    ];
  }
};

export const useCompletedDonationHistoryQuery = () => {
  const completedDonationHistoryQuery = useQuery({
    queryKey: ['user', 'completed-donation-history'],
    queryFn: getCompletedDonationHistory,
  });

  return completedDonationHistoryQuery;
};
