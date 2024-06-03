import * as S from './style';
import { Button } from 'components/index';
import { transformPrice } from 'utils/transformPrice';
import { useNavigate } from 'react-router-dom';
import { useLikedMutation } from 'queries/products/useLikedMutation';
import { useUnlikedMutation } from 'queries/products/useUnlikedMutation';
import { ProductDetailItem } from 'types/productType';
import { useNewChatRoom } from 'queries/chatting/useNewChatRoom';
import { userId } from 'data/shared';
import { GoHeart, GoHeartFill } from 'react-icons/go';

interface FooterProductDetailProps {
  product: ProductDetailItem;
  status: string;
}

const FooterProductDetail = ({ product, status }: FooterProductDetailProps) => {
  const { mutate: likedMutation } = useLikedMutation(product?.id as number);
  const { mutate: unlikedMutation } = useUnlikedMutation(product?.id as number);
  const { mutate: roomIdMutation } = useNewChatRoom();
  const navigate = useNavigate();

  const isMine = product?.seller.id === userId;

  if (status === 'pending' || status === 'error') return null;

  const handleChatClick = () => {
    if (product?.id) {
      const room_id = roomIdMutation(product?.id);
      // 생성된 방으로 이동 && 실제 room_id로 수정 필요
      navigate(`/chat/room/2`);
      // navigate(`/chat/room/${room_id}`);
    }
  };

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
        handleOnClick={handleChatClick}
      >
        채팅하기
      </Button>
    </S.Container>
  );
};

export default FooterProductDetail;
