import { useMutation, useQueryClient } from '@tanstack/react-query';
import CHATTING_API from 'apis/chattingApi';
import { USER_ID } from 'constants/shared';

export const useExitRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (chat_room_id: string) => CHATTING_API.deleteRoomId(chat_room_id),
    onSuccess: (res) => {
      console.log('채팅방 나가기 성공', res.data);
      queryClient.invalidateQueries({
        queryKey: ['chatting', 'chatting-list', USER_ID],
      });
    },
    onError: (error) => console.error('채팅방 나가기 실패', error),
  });
};
