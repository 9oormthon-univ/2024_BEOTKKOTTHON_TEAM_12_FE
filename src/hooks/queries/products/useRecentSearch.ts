import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';

const getRecentSearchData = async (userId: number) => {
  try {
    const response = await instance.get(`/products/search/list?userId=${userId}`);
    console.log('데이터 가져오기 성공', response);
    return response.data;
  } catch (e: any) {
    console.log('데이터 가져오기 실패', e);
    throw new Error(e.response?.data?.message);
  }
};

export const useRecentSearch = (userId: number) => {
  const recentSearchQuery = useQuery({
    queryKey: ['products', 'recent-search', userId],
    queryFn: () => getRecentSearchData(userId),
  });

  return recentSearchQuery;
};
