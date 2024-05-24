import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';

export const useNewChatRoom = (productId: number) => {
  return useMutation({
    mutationFn: () => instance.post(`/chat/room/create?productId=${productId}&userId=1`),
    onSuccess: (res) => {
      console.log('채팅방 생성 성공', res.data);
      return res.data.chat_room_id;
    },
    onError: (error) => console.error('방 생성 에러:', error),
  });
};
