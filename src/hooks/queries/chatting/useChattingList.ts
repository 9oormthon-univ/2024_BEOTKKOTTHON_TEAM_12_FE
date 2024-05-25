import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';
import { userId } from 'data/shared';

const getChatList = async () => {
  try {
    const res = await instance.get(`/chat/rooms?userId=${userId}&pageNumber=0`);
    console.log('채팅 리스트 가져오기 성공', res.data.content);
    return res.data.content;
  } catch (error) {
    console.error('채팅 리스트 가져오기 실패', error);
  }
};

export const useChattingList = () => {
  const chattingListQuery = useQuery({
    queryKey: ['chatting', 'chatting-list', userId],
    queryFn: () => getChatList(),
  });

  return chattingListQuery;
};
