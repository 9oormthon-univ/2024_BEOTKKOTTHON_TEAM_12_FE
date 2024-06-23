import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useBlockUser = () => {
  return useMutation({
    mutationFn: (chat_room_id: string) =>
      instance.post(`/chat/room/block?chatRoomId=${chat_room_id}&userId=${USER_ID}`),
    onSuccess: (res) => {
      console.log('사용자 차단 성공', res.data);
    },
    onError: (error) => console.error('사용자 차단 실패', error),
  });
};
