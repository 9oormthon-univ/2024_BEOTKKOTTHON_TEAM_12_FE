import { useQuery } from '@tanstack/react-query';
import UserService from './UserService';
import queryKeys from './queries';

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => UserService.getMypage(),
  });
}
