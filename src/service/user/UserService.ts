import { USER_ID } from 'constants/shared';
import { deleteData, getData, putData } from 'service/service';
import { DefaultQueryResponse } from 'types/common';

import {
  AccountResponse,
  BlockListResponse,
  CompletedProductsResponse,
  DonationHistoryResponse,
  MypageResponse,
  ProfileResponse,
  PurchaseProductsResponse,
  SalesProductsResponse,
  UnblockResponse,
  UserProfile,
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

const PUT = {
  changeAccount(account: AccountResponse): Promise<DefaultQueryResponse> {
    return putData(`/users/myHistory/${USER_ID}`, account);
  },
  changeProfile(userInfo: UserProfile): Promise<DefaultQueryResponse> {
    return putData(`/users/profile/${USER_ID}`, userInfo);
  },
  changeSalesToCompleted(productId: number): Promise<DefaultQueryResponse> {
    return putData(`/users/myProducts/onSale/${USER_ID}`, {
      id: productId,
      post_status: 'soldOut',
    });
  },
};

const DELETE = {
  unblock(blockedId: string): Promise<UnblockResponse> {
    return deleteData(`/users/blockedUsers/unBlock/${USER_ID}/${blockedId}`);
  },
};

const userService = {
  GET,
  PUT,
  DELETE,
};

export default userService;
