import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';

const getPopularSearch = async () => {
  try {
    const response = await instance.get(`/products/search/rank`);
    console.log('인기 검색어 불러오기 성공', response.data);
    return response.data;
  } catch (error: any) {
    console.log('인기 검색어 불러오기', error);
    throw new Error(error.response?.data?.message);
  }
};

export const usePopularSearch = () => {
  const popularSearchQuery = useQuery({
    queryKey: ['products', 'popular-search'],
    queryFn: () => getPopularSearch(),
  });

  return popularSearchQuery;
};
