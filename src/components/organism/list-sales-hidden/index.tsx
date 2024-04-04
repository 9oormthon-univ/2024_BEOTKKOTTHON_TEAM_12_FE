import * as S from './style';
import BoxItemTrade from 'components/molcule/box-item-trade';
import { useProductList } from 'store/productListData';
import { ProductListItem } from 'types/types';
import BoxNoItem from 'components/atom/box-noitem';
import { useHiddenProductQuery } from 'hooks/queries/user/useHiddenProductQuery';
import { Loading } from 'components';

const ListSalesHidden = () => {
  const hiddenProductQuery = useHiddenProductQuery();
  const productList = useProductList();
  console.log('ListSalesHidden productList', productList);

  if (hiddenProductQuery.isLoading) return <Loading />;

  return (
    <S.Container>
      {productList.length > 0 ? (
        productList.map((item: ProductListItem) => <BoxItemTrade key={item.id} product={item} />)
      ) : (
        <BoxNoItem />
      )}
    </S.Container>
  );
};

export default ListSalesHidden;
