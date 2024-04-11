import { useCompletedProductQuery } from 'hooks/queries/user/useCompletedProductQuery';
import { ListTradeItems, Loading } from 'components';

const ListSalesCompleted = () => {
  const { data: completedProductQuery, isLoading, isError } = useCompletedProductQuery();

  if (completedProductQuery.isLoading) return <Loading />;

  return <ListTradeItems />;
};

export default ListSalesCompleted;
