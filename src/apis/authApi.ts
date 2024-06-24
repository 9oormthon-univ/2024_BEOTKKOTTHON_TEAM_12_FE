import { instance } from 'apis';
import { LoginFormData } from 'types/authType';

const POST = {
  loginData(formData: LoginFormData) {
    return instance.post(`/auth/login`, formData);
  },
};

const AUTH_API = {
  POST,
};

export default AUTH_API;
