import { BoxItemTrade } from '@components/index';
import * as S from './style';
import { useProducts } from 'src/store/products';
const ListTradeItems = () => {
  const products = useProducts();
  return (
    <S.Container>
      {products.map((saleData) => (
        <BoxItemTrade key={saleData.id} data={saleData} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
