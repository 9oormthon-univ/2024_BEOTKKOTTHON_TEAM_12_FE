import { useCompletedProductQuery } from 'hooks/queries/user/useCompletedProductQuery';
import * as S from './style';
import BoxItemTrade from 'components/molcule/box-item-trade';
import { useProductList } from 'store/productListData';
import { ProductListItem } from 'types/types';
import { BoxNoItem, Loading } from 'components';

const ListSalesCompleted = () => {
  const completedProductQuery = useCompletedProductQuery();
  const productList = useProductList();
  console.log('ListSalesCompleted productList', productList);

  if (completedProductQuery.isLoading) return <Loading />;

  return (
    <S.Container>
      {productList.length > 0 ? (
        productList.map((item: ProductListItem) => (
          <BoxItemTrade key={item.id} product={item} width={'160px'} />
        ))
      ) : (
        <BoxNoItem />
      )}
    </S.Container>
  );
};

export default ListSalesCompleted;
