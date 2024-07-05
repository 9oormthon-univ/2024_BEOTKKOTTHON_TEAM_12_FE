import { USER_ID } from 'constants/shared';

const queryKeys = {
  all: ['products', USER_ID] as const,
  main: (activeCategory: string, clickedOnSale: string | null) => [
    ...queryKeys.all,
    activeCategory,
    clickedOnSale,
  ],
  detail: (productId: string) => [...queryKeys.all, 'detail', productId] as const,
  popularSearch: () => [...queryKeys.all, 'popular-search'] as const,
  recentSearch: () => [...queryKeys.all, 'recent-search'] as const,
  edit: (productId: string) => [...queryKeys.all, 'edit', productId] as const,
  search: (onSale: string | null, searchName: string, activeCategory: string) =>
    [...queryKeys.all, onSale, searchName, activeCategory] as const,
};

export default queryKeys;
