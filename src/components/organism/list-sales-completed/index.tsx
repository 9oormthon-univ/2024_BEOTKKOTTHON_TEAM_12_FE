import { useCompletedProductQuery } from 'hooks/queries/user/useCompletedProductQuery';
import { useProductList } from 'store/productListData';
import { ListTradeItems, Loading } from 'components';

const ListSalesCompleted = () => {
  const completedProductQuery = useCompletedProductQuery();
  const productList = useProductList();

  if (completedProductQuery.isLoading) return <Loading />;
  return <ListTradeItems />;
};

export default ListSalesCompleted;
