import { USER_ID } from 'constants/shared';
import { instance } from 'service';
import { AccountInfoType, BlockListResponse, MypageUserType } from 'types/userType';

const GET = {
  async mypage(): Promise<MypageUserType> {
    const response = await instance.get(`/users/${USER_ID}`);
    return response.data;
  },
  async accountInfo(): Promise<AccountInfoType> {
    const response = await instance.get(`/users/userInfo/${USER_ID}`);
    return response.data;
  },
  async blockList(pageParam: number): Promise<BlockListResponse> {
    const response = await instance.get(`/users/blockedUsers/${USER_ID}?pageNumber=${pageParam}`);
    return response.data;
  },
};

const userService = {
  GET,
};

export default userService;
