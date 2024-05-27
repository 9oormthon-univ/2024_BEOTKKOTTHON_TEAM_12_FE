import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';

const getRankingData = async () => {
  try {
    const res = await instance.get(`/university/rank`);
    console.log('대학 순위 정보 가져오기 성공', res.data);
    return res.data;
  } catch (error) {
    console.error('대학 순위 정보 가져오기 실패', error);
  }
};

export const useUnivRanking = () => {
  const rankingQuery = useQuery({
    queryKey: ['ranking'],
    queryFn: () => getRankingData(),
  });

  return rankingQuery;
};
