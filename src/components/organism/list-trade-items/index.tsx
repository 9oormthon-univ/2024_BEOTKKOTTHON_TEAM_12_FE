import { BoxError, BoxItemTrade, Loading } from 'components/index';
import * as S from './style';
import { useProductListData } from 'store/productListData';

interface ListTradeItemsProps {
  status?: string;
}

const ListTradeItems = ({ status }: ListTradeItemsProps) => {
  const { productList } = useProductListData();

  if (status === 'pending') return <Loading $height="300px" />;
  if (status === 'error') return <BoxError $height="300px">상품을 불러오지 못했습니다.</BoxError>;
  if (productList.length === 0)
    return <BoxError $height="300px">상품이 존재하지 않습니다.</BoxError>;

  return (
    <S.Container>
      {productList.map((product) => (
        <BoxItemTrade key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
