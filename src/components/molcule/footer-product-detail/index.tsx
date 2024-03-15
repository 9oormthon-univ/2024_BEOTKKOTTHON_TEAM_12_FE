import { Product } from 'src/types/types';
import * as S from './style';
import heart from '@assets/icons/heart.svg';
import { Button } from '@components/index';
import { transformPrice } from 'src/utils/transformPrice';

interface FooterProductDetailProps {
  product: Product;
}

const FooterProductDetail = ({ product }: FooterProductDetailProps) => {
  return (
    <S.Container>
      <img src={heart} className="heart" alt="heart" />
      <p className="price">{transformPrice(product.price as number)}원</p>
      {product.sold === '판매완료' ? (
        <Button width="280" backgroundColor="var(--grey-3)" color="var(--grey-5)" text="채팅하기" />
      ) : (
        <Button width="280" backgroundColor="var(--green-6)" color="white" text="채팅하기" />
      )}
    </S.Container>
  );
};

export default FooterProductDetail;
