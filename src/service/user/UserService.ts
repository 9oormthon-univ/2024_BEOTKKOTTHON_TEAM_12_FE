import { USER_ID } from 'constants/shared';
import { instance } from 'service';
import { AccountInfoType, MypageUserType } from 'types/userType';

const GET = {
  async mypage() {
    const response = await instance.get<MypageUserType>(`/users/${USER_ID}`);
    return response.data;
  },
  async accountInfo() {
    const response = await instance.get<AccountInfoType>(`/users/userInfo/${USER_ID}`);
    return response.data;
  },
};

const userService = {
  GET,
};

export default userService;
