import { BoxItemTrade } from '@components/index';
import * as S from './style';
import { useProducts } from 'src/store/products';
const ListTradeItems = () => {
  const products = useProducts();
  return (
    <S.Container>
      {products.map((product) => (
        <BoxItemTrade key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
