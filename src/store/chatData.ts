import { MessageType } from 'types/chattingType';
import { create } from 'zustand';

interface Actions {
  setMessage: (messages: MessageType[]) => void;
  addMessage: (message: MessageType) => void;
  sendMessage: (message: MessageType) => void;
}

interface MessageStore {
  messages: MessageType[];
  actions: Actions;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  actions: {
    setMessage: (messages) => set(() => ({ messages: [...messages] })),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    sendMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  },
}));

export const useMessageData = () => useMessageStore((state) => state.messages);
export const useMessageActions = () => useMessageStore((state) => state.actions);
