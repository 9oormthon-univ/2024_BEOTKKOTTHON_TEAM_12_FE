import { useInfiniteQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';
import { useEffect } from 'react';
import { useActiveCategory, useClickedOnSale, useProductListActions } from 'store/productListData';

const getProductListData = async (pageParam: number, category: string, onSale: string | null) => {
  const endpoint = onSale
    ? `/products/category/sale?categoryName=${category}`
    : `/products/category?categoryName=${category}`;

  try {
    const response = await instance.get(`${endpoint}&userId=${userId}&pageNumber=${pageParam}`);
    console.log('물품 리스트 불러오기 성공', response.data);
    return response.data;
  } catch (e: any) {
    console.log('물품 리스트 불러오기 실패 ', e);
    throw new Error(e.response?.data?.message);
  }
};

export const useProductMainQuery = () => {
  const clickedOnSale = useClickedOnSale();
  const activeCategory = useActiveCategory();
  const { addProductList } = useProductListActions();

  const productMainQuery = useInfiniteQuery({
    queryKey: ['products', activeCategory, clickedOnSale],
    queryFn: ({ pageParam }) => getProductListData(pageParam, activeCategory, clickedOnSale),
    select: (data) => ({
      pagesData: data?.pages.flatMap((page) => page.content),
      pageParams: data.pageParams,
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) return lastPage.number + 1;
      return undefined;
    },
  });

  useEffect(() => {
    if (productMainQuery.data) {
      addProductList(productMainQuery.data.pagesData);
    }
  }, [productMainQuery.data]);

  return productMainQuery;
};
