import { BoxItemTrade } from '@components/index';
import * as S from './style';
import { salesData } from 'src/data/shared';
const ListTradeItems = () => {
  return (
    <S.Container>
      {salesData.map((saleData) => (
        <BoxItemTrade key={saleData.id} data={saleData} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
