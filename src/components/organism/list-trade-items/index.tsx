import { BoxItemTrade, BoxNoItem } from 'components/index';
import * as S from './style';
import { useProductListData } from 'store/productListData';

const ListTradeItems = () => {
  const { productList } = useProductListData();
  return (
    <>
      {productList.length > 0 ? (
        <S.Container>
          {productList.map((product) => (
            <BoxItemTrade key={product.id} product={product} />
          ))}
        </S.Container>
      ) : (
        <BoxNoItem>상품 목록이 없습니다.</BoxNoItem>
      )}
    </>
  );
};

export default ListTradeItems;
