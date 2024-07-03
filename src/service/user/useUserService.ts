import { useQuery } from '@tanstack/react-query';
import queryKeys from './queries';
import userService from './userService';
import { useCustomInfiniteQuery } from 'hooks/useCustomInfiniteQuery';

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
