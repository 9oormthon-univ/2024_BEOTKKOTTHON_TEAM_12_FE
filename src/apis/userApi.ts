import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { AccountInfoType } from 'types/userType';

const USER_API = {
  // GET
  getAccountInfo() {
    return instance.get(`/users/userInfo/${USER_ID}`);
  },
  getBlockUserList(pageParam: number) {
    return instance.get(`/users/blockedUsers/${USER_ID}?pageNumber=${pageParam}`);
  },
  getCompletedProducts(pageParam: number) {
    return instance.get(`/users/myProducts/soldOut/${USER_ID}?pageNumber=${pageParam}`);
  },
  getDonationHistory(endPoint: string, pageParam: number) {
    return instance.get(`/users/myDonations/${endPoint}${USER_ID}?pageNumber=${pageParam}`);
  },
  getHiddenProducts(pageParam: number) {
    return instance.get(`/users/myProducts/private/${USER_ID}?pageNumber=${pageParam}`);
  },
  getWishListData(pageParam: number) {
    return instance.get(`/users/wishList/${USER_ID}?pageNumber=${pageParam}`);
  },
  getUserData() {
    return instance.get(`/users/${USER_ID}`);
  },
  getUserProfileData() {
    return instance.get(`/users/profile/${USER_ID}`);
  },
  getPurchaseHistory() {
    return instance.get(`/users/myHistory/${USER_ID}`);
  },
  getSalesProducts(pageParam: number) {
    return instance.get(`/users/myProducts/onSale/${USER_ID}?pageNumber=${pageParam}`);
  },

  // PUT
  putChangedAccountInfo(accountInfo: AccountInfoType) {
    return instance.put(`/users/userInfo/update/${USER_ID}`, accountInfo);
  },
  putChangedProfile(userInfo: any) {
    return instance.put(`/users/profile/${USER_ID}`, userInfo);
  },
  putSalesCompleted(productId: number) {
    return instance.put(`/users/myProducts/onSale/${USER_ID}`, {
      id: productId,
      post_status: 'soldOut',
    });
  },

  // DELETE
  deleteBlockUser(blockedUserId: string) {
    return instance.delete(`/users/blockedUsers/unBlock/${USER_ID}/${blockedUserId}`);
  },
};

export default USER_API;
