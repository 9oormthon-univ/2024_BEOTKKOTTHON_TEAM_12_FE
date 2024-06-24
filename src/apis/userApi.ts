import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { AccountInfoType } from 'types/userType';

const GET = {
  accountInfo() {
    return instance.get(`/users/userInfo/${USER_ID}`);
  },
  blockUserList(pageParam: number) {
    return instance.get(`/users/blockedUsers/${USER_ID}?pageNumber=${pageParam}`);
  },
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
  userData() {
    return instance.get(`/users/${USER_ID}`);
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
  changedAccountInfo(accountInfo: AccountInfoType) {
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
