import { useQuery } from '@tanstack/react-query';
import CHATTING_API from 'apis/chattingApi';
import { useEffect } from 'react';
import { useMessageActions } from 'store/chatData';

const getChatData = async (chat_rood_id: string) => {
  try {
    const res = await CHATTING_API.getChatData(chat_rood_id);
    console.log('채팅방 입장 성공', res.data);
    return res.data;
  } catch (error) {
    console.error('채팅방 입장 실패', error);
  }
};

export const useChattingDetailData = (chat_rood_id: string) => {
  const { setMessage } = useMessageActions();

  const chattingDetailQuery = useQuery({
    queryKey: ['chatting', 'chatting-detail', chat_rood_id],
    queryFn: () => getChatData(chat_rood_id),
  });

  useEffect(() => {
    if (chattingDetailQuery.data) setMessage(chattingDetailQuery.data.message_info_list);
  }, [chattingDetailQuery.data]);

  return chattingDetailQuery;
};
