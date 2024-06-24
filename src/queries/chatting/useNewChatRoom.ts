import { useMutation } from '@tanstack/react-query';
import CHATTING_API from 'apis/chattingApi';
import { useNavigate } from 'react-router-dom';

export const useNewChatRoom = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (productId: number) => CHATTING_API.POST.newChattingRoom(productId),
    onSuccess: (res) => {
      console.log('채팅방 생성 성공', res.data);
      navigate(`/chat/room/${res.data.chat_room_id}`);
      return res.data.chat_room_id;
    },
    onError: (error) => console.error('방 생성 에러:', error),
  });
};
