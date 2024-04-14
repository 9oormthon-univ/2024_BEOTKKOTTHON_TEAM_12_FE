import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { useSearchData } from 'store/search';

const getSearchData = async (searchName: string, activeCategory: string, onSale: string | null) => {
  const endpoint = onSale ? `/products/search/category/sale?` : `/products/search/category?`;

  try {
    const response = await instance.get(
      `${endpoint}searchName=${searchName}&categoryName=${activeCategory}&userId=${userId}&pageNumber=0`
    );

    console.log('상품 검색 성공', response.data.content);
    return response.data.content;
  } catch (error: any) {
    console.log('상품 검색 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useSearchQuery = () => {
  const searchName = useSearchData();
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { setActiveCategory, setInitialProductList } = useProductListActions();

  const searchQuery = useQuery({
    queryKey: ['products', 'search', searchName, activeCategory, clickedOnSale],
    queryFn: () => getSearchData(searchName, activeCategory, clickedOnSale),
  });

  useEffect(() => {
    setActiveCategory('전체');
  }, []);

  useEffect(() => {
    if (searchQuery.data) {
      setInitialProductList(searchQuery.data);
    }
  }, [searchQuery.data, setInitialProductList]);

  return searchQuery;
};
