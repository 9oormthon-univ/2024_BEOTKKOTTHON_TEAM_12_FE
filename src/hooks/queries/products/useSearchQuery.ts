import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { productMainDummyData } from 'data/product';
import { useEffect } from 'react';
import { useActiveCategory, useProductListActions } from 'store/productListData';
import { useSearchData } from 'store/search';

const getSearchData = async (searchName: string, activeCategory: string) => {
  try {
    const response = await instance.get(
      `/products/search/category?searchName=${searchName}?categoryName=${activeCategory}`
    );

    console.log('상품 검색 성공', response.data);
    return response.data;
  } catch (error) {
    console.log('상품 검색 실패', error);
    return productMainDummyData();
  }
};

export const useSearchQuery = () => {
  const searchName = useSearchData();
  const activeCategory = useActiveCategory();
  const { setActiveCategory, setInitialProductList } = useProductListActions();

  const searchQuery = useQuery({
    queryKey: ['products', 'search', activeCategory],
    queryFn: () => getSearchData(searchName, activeCategory),
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
