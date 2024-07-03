import { USER_ID } from 'constants/shared';
import { getData } from 'service';
import {
  AccountResponse,
  BlockListResponse,
  CompletedProductsResponse,
  DonationHistoryResponse,
  MypageResponse,
  ProfileResponse,
  PurchaseProductsResponse,
  SalesProductsResponse,
  WishListResponse,
} from 'types/userType';

const GET = {
  mypage(): Promise<MypageResponse> {
    return getData(`/users/${USER_ID}`);
  },

  accountInfo(): Promise<AccountResponse> {
    return getData(`/users/userInfo/${USER_ID}`);
  },

  blockList(pageParam: number): Promise<BlockListResponse> {
    return getData(`/users/blockedUsers/${USER_ID}?pageNumber=${pageParam}`);
  },

  completedProducts(pageParam: number): Promise<CompletedProductsResponse> {
    return getData(`/users/myProducts/soldOut/${USER_ID}?pageNumber=${pageParam}`);
  },

  hiddenProducts(pageParam: number): Promise<CompletedProductsResponse> {
    return getData(`/users/myProducts/private/${USER_ID}?pageNumber=${pageParam}`);
  },

  salesProducts(pageParam: number): Promise<SalesProductsResponse> {
    return getData(`/users/myProducts/onSale/${USER_ID}?pageNumber=${pageParam}`);
  },

  donationHistory(endPoint: string, pageParam: number): Promise<DonationHistoryResponse> {
    return getData(`/users/myDonations/${endPoint}${USER_ID}?pageNumber=${pageParam}`);
  },

  wishList(pageParam: number): Promise<WishListResponse> {
    return getData(`/users/wishList/${USER_ID}?pageNumber=${pageParam}`);
  },

  profile(): Promise<ProfileResponse> {
    return getData(`/users/profile/${USER_ID}`);
  },

  purchaseHistory(): Promise<PurchaseProductsResponse> {
    return getData(`/users/myHistory/${USER_ID}`);
  },
};

const userService = {
  GET,
};

export default userService;
