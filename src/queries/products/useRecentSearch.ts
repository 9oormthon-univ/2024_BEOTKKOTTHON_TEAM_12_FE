import { useQuery } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';

const getRecentSearchData = async (userId: number) => {
  try {
    const response = await PRODUCT_API.GET.recentSearch(userId);
    console.log('최근 검색어 조회 성공', response.data.search_name_list);
    return response.data.search_name_list;
  } catch (e: any) {
    console.log('최근 검색어 조회 실패', e);
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
