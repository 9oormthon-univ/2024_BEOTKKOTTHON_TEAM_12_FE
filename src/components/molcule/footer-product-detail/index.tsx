import * as S from './style';
import { Button } from 'components/index';
import { transformPrice } from 'utils/transformPrice';
import { ProductDetailResponse } from 'types/productType';
import { USER_ID } from 'constants/shared';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { useLiked, useUnliked } from 'service/product/useProductService';
import { useNewChatRoom } from 'service/chatting/useChattingService';

interface FooterProductDetailProps {
  product: ProductDetailResponse;
  status: string;
}

const FooterProductDetail = ({ product, status }: FooterProductDetailProps) => {
  const { mutate: likedMutation } = useLiked(product?.id as number);
  const { mutate: unlikedMutation } = useUnliked(product?.id as number);
  const { mutate: roomIdMutation } = useNewChatRoom();

  const isMine = product?.seller.id === USER_ID;

  if (status === 'pending' || status === 'error') return null;

  return (
    <S.Container>
      {product.is_selected ? (
        <GoHeartFill size={24} fill="#FF3B3B" onClick={() => likedMutation()} />
      ) : (
        <GoHeart size={24} fill="var(--grey-5)" onClick={() => unlikedMutation()} />
      )}
      <p className="price">{transformPrice(product.price as number)}원</p>
      <Button
        width="280"
        $bgcolor={product.post_status === 'soldOut' || isMine ? 'var(--grey-3)' : 'var(--green-6)'}
        color={product.post_status === 'soldOut' || isMine ? 'var(--grey-5)' : 'white'}
        disabled={product.post_status === 'soldOut'}
        handleOnClick={() => product?.id && roomIdMutation(product?.id)}
      >
        채팅하기
      </Button>
    </S.Container>
  );
};

export default FooterProductDetail;
