import { USER_ID } from 'constants/shared';

const queryKeys = {
  all: ['user', USER_ID] as const,
  account: () => [...queryKeys.all, 'account'] as const,
};

export default queryKeys;
