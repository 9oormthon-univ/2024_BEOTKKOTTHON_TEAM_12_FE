import { USER_ID } from 'constants/shared';

const queryKeys = {
  all: ['user', USER_ID] as const,
  account: () => [...queryKeys.all, 'account'] as const,
  blockList: () => [...queryKeys.all, 'block-list'] as const,
  completedProducts: () => [...queryKeys.all, 'completed'] as const,
  hiddenProducts: () => [...queryKeys.all, 'hidden'] as const,
  salesProducts: () => [...queryKeys.all, 'sales'] as const,
  donationHistory: (endPoint: string) => [...queryKeys.all, 'donation', endPoint] as const,
  wishList: () => [...queryKeys.all, 'wish'] as const,
  profile: () => [...queryKeys.all, 'profile'] as const,
  purchaseHistory: () => [...queryKeys.all, 'purchase'] as const,
};

export default queryKeys;
