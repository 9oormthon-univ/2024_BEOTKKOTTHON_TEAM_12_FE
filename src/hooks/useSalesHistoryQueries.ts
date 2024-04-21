import { useProductListActions } from 'store/productListData';
import { useCompletedProductQuery } from './queries/user/useCompletedProductQuery';
import { useHiddenProductQuery } from './queries/user/useHiddenProductQuery';
import { useSalesProductQuery } from './queries/user/useSalesProductQuery';
import { useEffect } from 'react';

export const useSalesHistoryQueries = (activeTab: string) => {
  const { addProductList } = useProductListActions();

  const salesProducts = useSalesProductQuery();
  const completedProducts = useCompletedProductQuery();
  const hiddenProducts = useHiddenProductQuery();

  const isPending =
    salesProducts.isPending || completedProducts.isPending || hiddenProducts.isPending;

  const isError = salesProducts.isError || completedProducts.isError || hiddenProducts.isError;

  const numberOfProducts = [
    salesProducts.data?.totalElements || 0,
    completedProducts.data?.totalElements || 0,
    hiddenProducts.data?.totalElements || 0,
  ];

  useEffect(() => {
    if (activeTab === '판매 중') {
      addProductList(salesProducts.data?.pagesData ? salesProducts.data.pagesData : []);
    } else if (activeTab === '판매 완료') {
      addProductList(completedProducts.data ? completedProducts.data : []);
    } else if (activeTab === '숨김') {
      addProductList(hiddenProducts.data ? hiddenProducts.data : []);
    }
  }, [activeTab, salesProducts.data, completedProducts.data, hiddenProducts.data]);

  return {
    salesProducts,
    completedProducts,
    hiddenProducts,
    isPending,
    isError,
    numberOfProducts,
  };
};
