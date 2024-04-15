import * as S from './style';
import stategrey from 'assets/icons/state_grey.svg';
import stategreen from 'assets/icons/state_green.svg';
import defaultImg from 'assets/images/product-default-img.png';
import heartgrey from 'assets/icons/grey-heart.svg';
import heartgreen from 'assets/icons/green-heart.svg';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { truncatedName } from 'utils/truncatedName';
import { ProductListItem } from 'types/productType';
import { useLikedMutation } from 'hooks/queries/products/useLikedMutation';
import { useUnlikedMutation } from 'hooks/queries/products/useUnlikedMutation';
import { useProductListActions } from 'store/productListData';

interface SaleItemProps {
  product: ProductListItem;
  $marginBottom?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ product, $marginBottom }) => {
  const navigate = useNavigate();
  const { setIsSelected } = useProductListActions();
  const { mutate: likedMutation } = useLikedMutation(product.id);
  const { mutate: unlikedMutation } = useUnlikedMutation(product.id);
  const soldState = product.post_status === 'soldOut';
  const circleUrl = product.product_status === '아주 좋아요' ? stategreen : stategrey;

  const handleContainerClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleHeartClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.stopPropagation();
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
      <S.HeartImage
        src={product.is_selected ? heartgreen : heartgrey}
        alt="heart"
        $selected={product.is_selected}
        onClick={handleHeartClick}
      />

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
