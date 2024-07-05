import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import queryKeys from './queries';
import chattingService from './chattingService';
import { useNavigate } from 'react-router-dom';

export const useChattingDetail = (chat_rood_id: string) => {
  return useQuery({
    queryKey: queryKeys.detail(chat_rood_id),
    queryFn: () => chattingService.GET.detail(chat_rood_id),
  });
};

export const useChattingList = () => {
  return useQuery({
    queryKey: queryKeys.chattingList(),
    queryFn: () => chattingService.GET.chattingList(),
  });
};

export const useBlockUser = () => {
  return useMutation({
    mutationFn: (chat_room_id: string) => chattingService.POST.blockUser(chat_room_id),
  });
};

export const useExitRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (chat_room_id: string) => chattingService.DELETE.roomId(chat_room_id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.chattingList(),
      }),
  });
};

export const useNewChatRoom = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (productId: number) => chattingService.POST.newChattingRoom(productId),
    onSuccess: (res) => {
      navigate(`/chat/room/${res.chat_room_id}`);
      return res.chat_room_id;
    },
  });
};
