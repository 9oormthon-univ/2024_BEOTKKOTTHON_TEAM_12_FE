import Service from 'service/Service';
import { LoginFormData } from 'types/authType';

class AuthService extends Service {
  postLogin({ id, password }: LoginFormData) {
    return this.axiosInstance.post<any>(`/auth/login`, { id, password });
  }
}

export default new AuthService();
