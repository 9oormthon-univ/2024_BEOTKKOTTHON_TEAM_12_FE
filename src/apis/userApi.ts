import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { AccountInfo } from 'types/userType';

const GET = {
  completedProducts(pageParam: number) {
    return instance.get(`/users/myProducts/soldOut/${USER_ID}?pageNumber=${pageParam}`);
  },
  donationHistory(endPoint: string, pageParam: number) {
    return instance.get(`/users/myDonations/${endPoint}${USER_ID}?pageNumber=${pageParam}`);
  },
  hiddenProducts(pageParam: number) {
    return instance.get(`/users/myProducts/private/${USER_ID}?pageNumber=${pageParam}`);
  },
  wishListData(pageParam: number) {
    return instance.get(`/users/wishList/${USER_ID}?pageNumber=${pageParam}`);
  },
  userProfileData() {
    return instance.get(`/users/profile/${USER_ID}`);
  },
  purchaseHistory() {
    return instance.get(`/users/myHistory/${USER_ID}`);
  },
  salesProducts(pageParam: number) {
    return instance.get(`/users/myProducts/onSale/${USER_ID}?pageNumber=${pageParam}`);
  },
};

const PUT = {
  changedAccountInfo(accountInfo: AccountInfo) {
    return instance.put(`/users/userInfo/update/${USER_ID}`, accountInfo);
  },
  changedProfile(userInfo: any) {
    return instance.put(`/users/profile/${USER_ID}`, userInfo);
  },
  salesCompleted(productId: number) {
    return instance.put(`/users/myProducts/onSale/${USER_ID}`, {
      id: productId,
      post_status: 'soldOut',
    });
  },
};

const DELETE = {
  blockUser(blockedUserId: string) {
    return instance.delete(`/users/blockedUsers/unBlock/${USER_ID}/${blockedUserId}`);
  },
};

const USER_API = {
  GET,
  PUT,
  DELETE,
};

export default USER_API;
