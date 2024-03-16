import { create } from 'zustand';

interface Actions {
  changeSearchData: (inputData: string) => void;
}

interface SearchStore {
  searchData: string;
  actions: Actions;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchData: '',
  actions: {
    changeSearchData: (inputData) => {
      set(() => ({ searchData: inputData }));
    },
  },
}));

export const useSearchData = () => useSearchStore((state) => state.searchData);
export const useSearchActions = () => useSearchStore((state) => state.actions);
