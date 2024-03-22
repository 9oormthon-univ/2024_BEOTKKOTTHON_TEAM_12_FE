import { Product } from 'src/types/types';
import * as S from './style';
import heart from '@assets/icons/heart.svg';
import { Button } from '@components/index';
import { transformPrice } from 'src/utils/transformPrice';
import { useNavigate } from 'react-router-dom';
import { instance } from 'src/apis';

interface FooterProductDetailProps {
  product: Product;
}

const FooterProductDetail = ({ product }: FooterProductDetailProps) => {
  const navigate = useNavigate();
  const productId = product.id;
  const customerId = '1';

  const getChatRoomId = async () => {
    try {
      const response = await instance.post(
        `/chat/room/create?productId=${productId}&customerId=${customerId}`
      );
      console.log('채팅방 생성', response.data.chat_room_id);
      return response.data.chat_room_id;
    } catch (e) {
      console.log('채팅방 생성 실패', e);
    }
  };

  const handleChatClick = () => {
    // 제품의 판매 상태가 '판매중'인 경우에만 채팅 페이지로 이동
    if (product.post_status !== '판매완료') {
      getChatRoomId().then((roomId) => {
        // 채팅방이 생성된 후에만 네비게이션 실행
        navigate(`/chat-detail`, { state: { productId: product.id, chatRoomId: roomId } });
      });
    }
  };

  return (
    <S.Container>
      <img src={heart} className="heart" alt="heart" />
      <p className="price">{transformPrice(product.price as number)}원</p>
      <Button
        width="280"
        $bgcolor={product.post_status === '판매완료' ? 'var(--grey-3)' : 'var(--green-6)'}
        color={product.post_status === '판매완료' ? 'var(--grey-5)' : 'white'}
        children="채팅하기"
        handleOnClick={handleChatClick}
      />
    </S.Container>
  );
};

export default FooterProductDetail;
