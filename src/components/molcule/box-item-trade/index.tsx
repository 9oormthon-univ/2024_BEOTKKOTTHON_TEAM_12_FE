import * as S from './style';
import stategrey from 'assets/icons/state_grey.svg';
import stategreen from 'assets/icons/state_green.svg';
import defaultImg from 'assets/images/product-default-img.png';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { truncatedName } from 'utils/truncatedName';
import { ProductItem } from 'types/productType';
import { useProductListActions } from 'store/productListData';
import { GoHeartFill } from 'react-icons/go';
import { useLiked, useUnliked } from 'service/product/useProductService';

interface SaleItemProps {
  product: ProductItem;
  $marginBottom?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ product, $marginBottom }) => {
  const navigate = useNavigate();
  const { setIsSelected } = useProductListActions();
  const { mutate: likedMutation } = useLiked(product.id);
  const { mutate: unlikedMutation } = useUnliked(product.id);
  const soldState = product.post_status === 'soldOut';
  const circleUrl = product.product_status === '아주 좋아요' ? stategreen : stategrey;

  const handleContainerClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleHeartClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    if (product.is_selected) {
      unlikedMutation();
    } else {
      likedMutation();
    }
    setIsSelected(product.id);
  };

  return (
    <S.Container $marginBottom={$marginBottom} onClick={handleContainerClick}>
      <S.BoxImage src={product.product_image ? product.product_image[0] : defaultImg} />
      {product.is_selected ? (
        <GoHeartFill color="var(--red-primary)" onClick={(e: any) => handleHeartClick(e)} />
      ) : (
        <GoHeartFill
          stroke="white"
          strokeWidth={2}
          color="var(--grey-5)"
          onClick={(e: any) => handleHeartClick(e)}
        />
      )}

      <S.BoxDescription>
        <S.Title>
          <p className="name">{truncatedName(product.product_name)}</p>
          <p className="time">{product.time}</p>
        </S.Title>

        <S.State>
          <img src={circleUrl} alt="none-trade" />
          <p className="state">상품 상태 : {product.product_status}</p>
        </S.State>

        <S.Price>
          <p className="price">{transformPrice(product.price)}원</p>
          {soldState && <p className="sold">판매완료</p>}
        </S.Price>
      </S.BoxDescription>
    </S.Container>
  );
};

export default BoxItemTrade;
