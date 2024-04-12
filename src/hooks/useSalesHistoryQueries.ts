import { useProductListActions } from 'store/productListData';
import { useCompletedProductQuery } from './queries/user/useCompletedProductQuery';
import { useHiddenProductQuery } from './queries/user/useHiddenProductQuery';
import { useSalesProductQuery } from './queries/user/useSalesProductQuery';
import { useEffect } from 'react';

export const useSalesHistoryQueries = (activeTab: string) => {
  const { setInitialProductList } = useProductListActions();

  const salesProducts = useSalesProductQuery();
  const completedProducts = useCompletedProductQuery();
  const hiddenProducts = useHiddenProductQuery();

  const isLoading =
    salesProducts.isLoading || completedProducts.isLoading || hiddenProducts.isLoading;

  const numberOfProducts = [
    salesProducts.data?.length || 0,
    completedProducts.data?.length || 0,
    hiddenProducts.data?.length || 0,
  ];

  useEffect(() => {
    if (activeTab === '판매중') {
      setInitialProductList(salesProducts.data ? salesProducts.data : []);
    } else if (activeTab === '판매 완료') {
      setInitialProductList(completedProducts.data ? completedProducts.data : []);
    } else if (activeTab === '숨김') {
      setInitialProductList(hiddenProducts.data ? hiddenProducts.data : []);
    }
  }, [activeTab, salesProducts.data, completedProducts.data, hiddenProducts.data]);

  return {
    salesProducts,
    completedProducts,
    hiddenProducts,
    isLoading,
    numberOfProducts,
  };
};
