import { BoxItemTrade } from '@components/index';
import * as S from './style';
import { useAllProducts, useFilteredProducts } from 'src/store/products';
const ListTradeItems = () => {
  const products = useFilteredProducts();
  const allproducts = useAllProducts();
  console.log(allproducts);
  return (
    <S.Container>
      {products.map((product) => (
        <BoxItemTrade key={product.id} product={product} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
