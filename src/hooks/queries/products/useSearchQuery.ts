import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { useSearchData } from 'store/search';

const getSearchData = async (searchName: string, activeCategory: string, onSale: string | null) => {
  try {
    const response = await instance.get(
      `/products/search/${
        onSale ? `category/sale?` : `category?`
      }searchName=${searchName}&categoryName=${activeCategory}&userId=${userId}&pageNumber=0`
    );

    console.log('상품 검색 성공', response.data.content);
    return response.data.content;
  } catch (error) {
    console.log('상품 검색 실패', error);
    return [];
  }
};

export const useSearchQuery = () => {
  const searchName = useSearchData();
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { setActiveCategory, setInitialProductList } = useProductListActions();

  const searchQuery = useQuery({
    queryKey: ['products', 'search', activeCategory, clickedOnSale],
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
