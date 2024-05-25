import { useQuery } from '@tanstack/react-query';
import { instance } from 'apis';

const getChatData = async (chat_rood_id: string) => {
  try {
    const res = await instance.get(`/chat/room/enter?chatRoomId=${chat_rood_id}&userId=1`);
    console.log('채팅 데이터 가져오기 성공', res.data);
    return res.data;
  } catch (error) {
    console.error('채팅 데이터 가져오기 실패', error);
  }
};

export const useChattingDetailData = (chat_rood_id: string) => {
  const chattingDetailQuery = useQuery({
    queryKey: ['chatting', 'chatting-detail', chat_rood_id],
    queryFn: () => getChatData(chat_rood_id),
  });

  return chattingDetailQuery;
};
