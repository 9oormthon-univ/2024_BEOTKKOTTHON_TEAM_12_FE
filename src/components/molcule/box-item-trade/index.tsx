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
  const soldState = product.product_status === '판매완료';
  const circleUrl = product.product_status === '아주 좋아요' ? stategreen : stategrey;

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <S.Container width={width || '48%'} onClick={handleClick}>
      <S.BoxImage src={product.product_image_list ? product.product_image_list[0] : defaultImg} />

      <S.BoxDescription>
        <S.Title>
          <p className="name">{product.product_name}</p>
          <p className="time">30분 전</p>
        </S.Title>

        <S.State>
          <img src={circleUrl} alt="none-trade" />
          <p className="state">상품 상태 : {product.product_status}</p>
        </S.State>

        <S.Price>
          <p className="price">{transformPrice(product.price)}원</p>
          {soldState && <p className="sold">{product.post_status}</p>}
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
