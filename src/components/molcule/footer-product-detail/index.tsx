import * as S from './style';
import heart from 'assets/icons/heart.svg';
import fillheart from 'assets/icons/fill-heart.svg';
import { Button } from 'components/index';
import { transformPrice } from 'utils/transformPrice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLikedMutation } from 'hooks/queries/products/useLikedMutation';
import { useUnlikedMutation } from 'hooks/queries/products/useUnlikedMutation';
import { ProductDetailItem } from 'types/productType';
import { instance } from 'apis';

interface FooterProductDetailProps {
  product: ProductDetailItem;
  status: string;
}

const FooterProductDetail = ({ product, status }: FooterProductDetailProps) => {
  const { mutate: likedMutation } = useLikedMutation(product?.id as number);
  const { mutate: unlikedMutation } = useUnlikedMutation(product?.id as number);
  const [isMine, setIsMine] = useState<boolean>(false);
  const navigate = useNavigate();
  const curProductsId = product?.id;

  if (status === 'pending' || status === 'error') return null;

  // 채팅방 생성
  const postNewChatRoom = async (productId: number) => {
    try {
      const res = await instance.post(`/chat/room/create?productId=${productId}&userId=1`, {
        productId: productId,
      });
      console.log('postNewChatRoom', '방 생성 성공', res.data);
      return res.data.chat_room_id;
    } catch (error) {
      console.error('방 생성 에러:', error);
    }
  };

  // 채팅하기 버튼 클릭
  const handleChatClick = async () => {
    if (curProductsId) {
      try {
        await createChatRoom();
        console.log('handleChatClick', '방 생성 성공');
      } catch (error) {
        console.error('방 생성 에러:', error);
      }
    }
  };

  // 방이 없다면 curProductsId로 방 생성
  const createChatRoom = async () => {
    try {
      const room_id = await postNewChatRoom(curProductsId);
      // 생성된 방으로 이동
      console.log('createChatRoom', '방 생성 성공');
      enterChatRoom(room_id);
    } catch (error) {
      console.error('방 생성 에러:', error);
    }
  };

  // 방으로 이동
  const enterChatRoom = (room_id: number) => {
    console.log('enterChatRoom', '방 이동 성공');
    navigate(`/chat/room/${room_id}`);
  };

  //본인글이면 채팅 안됨
  // useEffect(() => {
  //   if (product && product.seller?.id.toString() === customerId) {
  //     setIsMine(true);
  //   }
  // }, []);

  // const getChatRoomId = async () => {
  //   try {
  //     const response = await instance.post(
  //       `/chat/room/create?productId=${product.id}&customerId=${customerId}`
  //     );
  //     if (response.data.created === true) {
  //       //이미 존재하는 채팅방이면 바로 채팅방으로 이동
  //       navigate(`/chat-detail`, {
  //         state: { productId: product.id, chatRoomId: response.data.chat_room_id },
  //       });
  //     } else {
  //       console.log('채팅방 생성', response.data.chat_room_id);
  //       return response.data.chat_room_id;
  //     }
  //   } catch (e) {
  //     console.log('채팅방 생성 실패', e);
  //   }
  // };

  // const handleChatClick = () => {
  //   // 제품의 판매 상태가 '판매중'인 경우에만 채팅 페이지로 이동
  //   if (product.post_status !== '판매완료' && !isMine) {
  //     console.log(product);
  //     getChatRoomId().then((roomId) => {
  //       // 채팅방이 생성된 후에만 네비게이션 실행
  //       navigate(`/chat-detail`, {
  //         state: { productId: product.id, chatRoomId: roomId },
  //       });
  //     });
  //   }
  // };

  return (
    <S.Container>
      <img
        src={product.is_selected ? fillheart : heart}
        className="heart"
        alt="heart"
        onClick={() => (product.is_selected ? unlikedMutation() : likedMutation())}
      />
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
