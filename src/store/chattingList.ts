import { ChattingListType } from 'types/chattingType';
import { create } from 'zustand';
import wearProfile from 'assets/images/wear_profile.svg';

interface Actions {
  setChattingList: (messages: ChattingListType[]) => void;
}

interface ChattingListStore {
  chattingList: ChattingListType[];
  actions: Actions;
}

const initialMessage = {
  chat_other_id: -1,
  chat_other_level: '',
  chat_other_nick_name: '팀 WEAR',
  chat_room_id: -1,
  product_image: [wearProfile],
  message_info: {
    is_mine: false,
    message: `등록하신 <가져가세요> 상품이 5일동안 거래가`,
    message_image: [],
    time: '10:00',
  },
};

const useChatStore = create<ChattingListStore>((set) => ({
  chattingList: [],
  actions: {
    setChattingList: (messages) => set(() => ({ chattingList: [initialMessage, ...messages] })),
  },
}));

export const useChattingListData = () => useChatStore((state) => state.chattingList);
export const useChattingListActions = () => useChatStore((state) => state.actions);
