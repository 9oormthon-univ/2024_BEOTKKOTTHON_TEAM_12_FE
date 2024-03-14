import { BoxItemTrade } from '@components/index';
import * as S from './style';

const ListTradeItems = () => {
  return (
    <S.Container>
      {[...Array(10)].map((_, i) => (
        <BoxItemTrade key={i} />
      ))}
    </S.Container>
  );
};

export default ListTradeItems;
