import { instance } from 'apis';
import { LoginFormData } from 'types/authType';

const AUTH_API = {
  postLoginData(formData: LoginFormData) {
    return instance.post(`/auth/login`, formData);
  },
};

export default AUTH_API;
