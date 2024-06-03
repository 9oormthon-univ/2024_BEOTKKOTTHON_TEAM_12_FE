import { useProductListActions } from 'store/productListData';
import { useEffect } from 'react';
import { useCompletedProductQuery } from './useCompletedProductQuery';
import { useSalesProductQuery } from './useSalesProductQuery';
import { useHiddenProductQuery } from './useHiddenProductQuery';

export const useSalesHistoryQueries = (activeTab: number) => {
  const { addProductList } = useProductListActions();

  const salesProducts = useSalesProductQuery();
  const completedProducts = useCompletedProductQuery();
  const hiddenProducts = useHiddenProductQuery();

  const list = [salesProducts, completedProducts, hiddenProducts];

  const isPending =
    salesProducts.isPending || completedProducts.isPending || hiddenProducts.isPending;

  const isError = salesProducts.isError || completedProducts.isError || hiddenProducts.isError;

  const numberOfProducts = [
    salesProducts.data?.totalElements || 0,
    completedProducts.data?.totalElements || 0,
    hiddenProducts.data?.totalElements || 0,
  ];

  const fetchNextPage = list[activeTab].fetchNextPage;

  const isFetchingNextPage = list[activeTab].isFetchingNextPage;

  useEffect(() => {
    if (activeTab === 0) {
      addProductList(salesProducts.data?.pagesData ? salesProducts.data.pagesData : []);
    } else if (activeTab === 1) {
      addProductList(completedProducts.data?.pagesData ? completedProducts.data.pagesData : []);
    } else if (activeTab === 2) {
      addProductList(hiddenProducts.data?.pagesData ? hiddenProducts.data.pagesData : []);
    }
  }, [activeTab, salesProducts.data, completedProducts.data, hiddenProducts.data]);

  return {
    salesProducts,
    completedProducts,
    hiddenProducts,
    isPending,
    isError,
    numberOfProducts,
    fetchNextPage,
    isFetchingNextPage,
  };
};
