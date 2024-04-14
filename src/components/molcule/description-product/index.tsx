import * as S from './style';
import stategrey from 'assets/icons/state_grey.svg';
import stategreen from 'assets/icons/state_green.svg';
import { useProduct } from 'store/product';

const DescriptionProduct = () => {
  const product = useProduct();
  if (!product) return null;

  const stateImgUrl = product.product_status === '아주 좋아요' ? stategreen : stategrey;

  return (
    <S.Container>
      <p className="name">{product.product_name}</p>

      <S.SubTitle>
        <img src={stateImgUrl} alt="none-trade" />

        <p className="state">상품 상태 : {product.product_status}</p>
        <p className="time">{product.time}</p>
      </S.SubTitle>

      <p className="description">{product.product_content}</p>

      <p className="place">
        성균관 대학교<span>{product.place}</span>에서 만나요!
      </p>
    </S.Container>
  );
};

export default DescriptionProduct;
