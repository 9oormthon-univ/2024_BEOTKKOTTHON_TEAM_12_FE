import { USER_ID } from 'constants/shared';
import { instance } from 'service';
import { MypageUserType } from 'types/userType';

const GET = {
  mypage() {
    return instance.get<MypageUserType>(`/users/${USER_ID}`);
  },
};

const userService = {
  GET,
};

export default userService;
