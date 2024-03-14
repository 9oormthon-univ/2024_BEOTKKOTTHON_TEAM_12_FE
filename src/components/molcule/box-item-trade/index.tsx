import { SaleItem } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/trade_state_grey.svg';

interface SaleItemProps {
  data: SaleItem;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ data }) => {
  return (
    <S.Container>
      <S.BoxImage />

      <S.BoxDescription>
        <S.Title>
          <p className="name">{data.name}</p>
          <p className="time">{data.time}</p>
        </S.Title>

        <S.State>
          <img src={stategrey} alt="none-trade" />
          <p className="state">{data.state}</p>
        </S.State>

        <S.Price>
          <p className="price">{data.price}</p>
          <p className="sold">{data.sold}</p>
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
