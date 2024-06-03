import { useInfiniteQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';
import { useSearchData } from 'store/search';

const getSearchData = async (
  pageParam: number,
  searchName: string,
  activeCategory: string,
  onSale: string | null
) => {
  const endpoint = onSale ? `/products/search/category/sale?` : `/products/search/category?`;

  try {
    const response = await instance.get(
      `${endpoint}searchName=${searchName}&categoryName=${activeCategory}&userId=${userId}&pageNumber=${pageParam}`
    );

    console.log('상품 검색 성공', response.data);
    return response.data;
  } catch (error: any) {
    console.log('상품 검색 실패', error);
    throw new Error(error.response?.data?.message);
  }
};

export const useSearchQuery = () => {
  const searchName = useSearchData();
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { setActiveCategory, addProductList } = useProductListActions();

  const searchQuery = useInfiniteQuery({
    queryKey: ['products', 'search', searchName, activeCategory, clickedOnSale],
    queryFn: ({ pageParam }) => getSearchData(pageParam, searchName, activeCategory, clickedOnSale),
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

  useEffect(() => {
    setActiveCategory('전체');
  }, []);

  useEffect(() => {
    if (searchQuery.data) {
      addProductList(searchQuery.data.pagesData);
    }
  }, [searchQuery.data]);

  return searchQuery;
};
