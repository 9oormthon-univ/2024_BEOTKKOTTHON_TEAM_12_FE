import { ProductListItem } from 'types/types';
import * as S from './style';
import stategrey from 'assets/icons/state_grey.svg';
import stategreen from 'assets/icons/state_green.svg';
import defaultImg from 'assets/images/product-default-img.png';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { truncatedName } from 'utils/truncatedName';
import { changeStringToArr } from 'utils/changeStringToArr';

interface SaleItemProps {
  product: ProductListItem;
  $marginBottom?: string;
}

const BoxItemTrade: React.FC<SaleItemProps> = ({ product, $marginBottom }) => {
  const navigate = useNavigate();
  const soldState = product.post_status === 'soldOut';
  const circleUrl = product.product_status === '아주 좋아요' ? stategreen : stategrey;

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <S.Container $marginBottom={$marginBottom} onClick={handleClick}>
      <S.BoxImage
        //   이미지 한장만 주는지, 배열로 주는지에 따라 로직 변경
        //   상품 리스트 보여주는 곳들의 product_image 전달 형식 통일 시켜야함
        //   src={
        //   product.product_image
        //     ? changeStringToArr(product.product_image)[0].slice(1, -1)
        //     : defaultImg
        // }

        src={
          product.product_image
            ? product.product_image.includes('[')
              ? changeStringToArr(product.product_image)[0].slice(1, -1)
              : product.product_image
            : defaultImg
        }
      />
      <S.BoxDescription>
        <S.Title>
          <p className="name">{truncatedName(product.product_name)}</p>
          <p className="time">30분 전</p>
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
