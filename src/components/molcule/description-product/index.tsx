import { SaleItem } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/state_grey.svg';
import stategreen from '@assets/icons/state_green.svg';

interface DescriptionProductProps {
  product: SaleItem;
}

const DescriptionProduct = ({ product }: DescriptionProductProps) => {
  const circleUrl = product.state === '아주 좋아요' ? stategreen : stategrey;

  return (
    <S.Container>
      <p className="name">{product.name}</p>

      <S.SubTitle>
        <img src={circleUrl} alt="none-trade" />

        <p className="state">상품 상태 : {product.state}</p>
        <p className="time">{product.time}</p>
      </S.SubTitle>

      <p className="description">{product.description}</p>

      <p className="place">
        성균관 대학교<span>{product.place}</span>에서 만나요!
      </p>
    </S.Container>
  );
};

export default DescriptionProduct;
