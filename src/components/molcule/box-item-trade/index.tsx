import { Product } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/state_grey.svg';
import stategreen from '@assets/icons/state_green.svg';
import defaultImg from '@assets/images/product-default-img.png';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'src/utils/transformPrice';

interface SaleItemProps {
  product: Product;
  width?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ product, width }) => {
  const navigate = useNavigate();
  const circleUrl = product.state === '아주 좋아요' ? stategreen : stategrey;

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <S.Container width={width || '48%'} onClick={handleClick}>
      <S.BoxImage src={product.recievedImgUrl ? product.recievedImgUrl[0] : defaultImg} />

      <S.BoxDescription>
        <S.Title>
          <p className="name">{product.name}</p>
          <p className="time">{product.time}</p>
        </S.Title>

        <S.State>
          <img src={circleUrl} alt="none-trade" />
          <p className="state">상품 상태 : {product.state}</p>
        </S.State>

        <S.Price $sold={product.sold === '판매완료' ? true : false}>
          <p className="price">{transformPrice(product.price)}원</p>
          <p className="sold">{product.sold}</p>
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
