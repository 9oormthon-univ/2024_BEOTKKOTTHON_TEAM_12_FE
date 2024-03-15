import { SaleItem } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/trade_state_grey.svg';
import defaultImg from '@assets/images/product-default-img.png';
import { useNavigate } from 'react-router-dom';

interface SaleItemProps {
  data: SaleItem;
  width?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ data, width }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <S.Container width={width} onClick={handleClick}>
      <S.BoxImage src={defaultImg} />

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
