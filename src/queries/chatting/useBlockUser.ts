import { useMutation } from '@tanstack/react-query';
import CHATTING_API from 'apis/chattingApi';

export const useBlockUser = () => {
  return useMutation({
    mutationFn: (chat_room_id: string) => CHATTING_API.postBlockUser(chat_room_id),
    onSuccess: (res) => {
      console.log('사용자 차단 성공', res.data);
    },
    onError: (error) => console.error('사용자 차단 실패', error),
  });
};
