import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import queryKeys from './queries';
import userService from './userService';
import { useCustomInfiniteQuery } from 'hooks/useCustomInfiniteQuery';
import { AccountResponse } from 'types/userType';

export function useMypage() {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => userService.GET.mypage(),
  });
}

export function useAccount() {
  return useQuery({
    queryKey: queryKeys.account(),
    queryFn: () => userService.GET.accountInfo(),
  });
}

export function useBlockList() {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.blockList(),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.blockList(pageParam),
  });
}

export const useCompletedProduct = () => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.completedProducts(),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.completedProducts(pageParam),
  });
};

export const useHiddenProduct = () => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.hiddenProducts(),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.hiddenProducts(pageParam),
  });
};

export const useSalesProduct = () => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.salesProducts(),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.salesProducts(pageParam),
  });
};

export const useDonationHistory = (endPoint: string) => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.donationHistory(endPoint),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.donationHistory(endPoint, pageParam),
  });
};

export const useWishList = () => {
  return useCustomInfiniteQuery({
    queryKey: queryKeys.wishList(),
    queryFn: ({ pageParam = 0 }: any) => userService.GET.wishList(pageParam),
  });
};

export function useProfile() {
  return useQuery({
    queryKey: queryKeys.profile(),
    queryFn: () => userService.GET.profile(),
  });
}

export function usePurchaseHistory() {
  return useQuery({
    queryKey: queryKeys.purchaseHistory(),
    queryFn: () => userService.GET.purchaseHistory(),
  });
}

export function useUnblock() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blockedId: string) => userService.DELETE.unblock(blockedId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.blockList() }),
    onError: () => alert('차단을 해제하지 못했습니다.'),
  });
}

export const useChangeAccount = () => {
  return useMutation({
    mutationFn: (accountInfo: AccountResponse) => userService.PUT.changeAccount(accountInfo),
    onSuccess: () => alert('저장되었습니다.'),
    onError: () => alert('저장하지 못했습니다. 다시 시도해주세요.'),
  });
};

export const useChangeProfile = () => {
  return useMutation({
    mutationFn: (userInfo: any) => userService.PUT.changeProfile(userInfo),
    onSuccess: () => alert('프로필을 수정하였습니다.'),
    onError: () => alert('프로필을 수정하지 못했습니다.'),
  });
};

export const useChangeSalesToCompleted = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) => userService.PUT.changeSalesToCompleted(productId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: queryKeys.salesProducts() }),
    onError: () => alert('상품 상태를 변경하지 못했습니다.'),
  });
};
