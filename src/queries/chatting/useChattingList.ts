import { useQuery } from '@tanstack/react-query';
import CHATTING_API from 'apis/chattingApi';
import { USER_ID } from 'constants/shared';
import { useEffect } from 'react';
import { useChattingListActions } from 'store/chattingList';

const getChatList = async () => {
  try {
    const res = await CHATTING_API.getChatList();
    console.log('채팅 리스트 가져오기 성공', res.data.content);
    return res.data.content;
  } catch (error) {
    console.error('채팅 리스트 가져오기 실패', error);
    return [];
  }
};

export const useChattingList = () => {
  const { setChattingList } = useChattingListActions();
  const chattingListQuery = useQuery({
    queryKey: ['chatting', 'chatting-list', USER_ID],
    queryFn: () => getChatList(),
  });

  useEffect(() => {
    if (chattingListQuery.data) setChattingList(chattingListQuery.data);
  }, [chattingListQuery.data]);

  return chattingListQuery;
};
