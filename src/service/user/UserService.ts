import { USER_ID } from 'constants/shared';
import Service from 'service/Service';
import { MypageUserType } from 'types/userType';

class UserService extends Service {
  getMypage() {
    return this.axiosAuthInstance.get<MypageUserType>(`/users/${USER_ID}`);
  }
}

export default new UserService();
