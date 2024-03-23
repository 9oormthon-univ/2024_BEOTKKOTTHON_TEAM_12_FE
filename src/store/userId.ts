// store/userStore.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
  userId: '',
  setUserId: (id: string) => set({ userId: id }),
}));

export default useUserStore;
