import { SaleItem } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/state_grey.svg';
import stategreen from '@assets/icons/state_green.svg';
import defaultImg from '@assets/images/product-default-img.png';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'src/utils/transformPrice';

interface SaleItemProps {
  data: SaleItem;
  width?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ data, width }) => {
  const navigate = useNavigate();
  const circleUrl = data.state === '아주 좋아요' ? stategreen : stategrey;

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
          <img src={circleUrl} alt="none-trade" />
          <p className="state">상품 상태 : {data.state}</p>
        </S.State>

        <S.Price sold={data.sold === '판매완료' ? true : false}>
          <p className="price">{transformPrice(data.price)}원</p>
          <p className="sold">{data.sold}</p>
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
