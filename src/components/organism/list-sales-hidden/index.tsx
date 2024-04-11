import { useHiddenProductQuery } from 'hooks/queries/user/useHiddenProductQuery';
import { ListTradeItems, Loading } from 'components';

const ListSalesHidden = () => {
  const { data: hiddenProductQuery, isLoading, isError } = useHiddenProductQuery();

  if (isLoading) return <Loading />;

  return <ListTradeItems />;
};

export default ListSalesHidden;
