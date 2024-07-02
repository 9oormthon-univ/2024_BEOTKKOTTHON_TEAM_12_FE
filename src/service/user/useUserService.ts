import { useQuery } from '@tanstack/react-query';
import queryKeys from './queries';
import userService from './userService';

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => userService.GET.mypage(),
  });
}
