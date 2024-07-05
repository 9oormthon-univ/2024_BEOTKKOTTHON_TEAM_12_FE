import { USER_ID } from 'constants/shared';

const queryKeys = {
  all: ['chatting'] as const,
  detail: (chat_rood_id: string) => [...queryKeys.all, 'detail', chat_rood_id] as const,
  chattingList: () => [...queryKeys.all, 'detail', 'chatting-list', USER_ID] as const,
};

export default queryKeys;
