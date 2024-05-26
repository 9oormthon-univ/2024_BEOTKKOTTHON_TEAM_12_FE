import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';

export const useExitRoom = () => {
  return useMutation({
    mutationFn: (chat_room_id: string) =>
      instance.delete(`/chat/room/delete?chatRoomId=${chat_room_id}&userId=1`),
    onSuccess: (res) => {
      console.log('채팅방 나가기 성공', res.data);
    },
    onError: (error) => console.error('채팅방 나가기 실패', error),
  });
};
