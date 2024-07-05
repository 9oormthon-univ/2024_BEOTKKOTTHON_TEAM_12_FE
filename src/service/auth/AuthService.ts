import { instanceWithoutAuth } from 'service/service';
import { LoginFormData } from 'types/authType';

const POST = {
  login({ id, password }: LoginFormData) {
    return instanceWithoutAuth.post<any>(`/auth/login`, { id, password });
  },
};

const authService = {
  POST,
};

export default authService;
