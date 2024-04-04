import { BoxItemTrade, BoxNoItem } from 'components/index';
import * as S from './style';
import { useProductListData } from 'store/productListData';

const ListTradeItems = () => {
  const { productList } = useProductListData();
  return (
    <S.Container>
      {productList.length > 0 ? (
        productList.map((product) => <BoxItemTrade key={product.id} product={product} />)
      ) : (
        <BoxNoItem />
      )}
    </S.Container>
  );
};

export default ListTradeItems;
