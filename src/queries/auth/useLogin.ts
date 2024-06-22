import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { AxiosError } from 'axios';
import { userId } from 'data/shared';
import { LoginFormData } from 'types/authType';

export const onLogInSuccess = (accessToken: string) => {
  console.log('로그인 성공');
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const useLogin = (formData: LoginFormData) => {
  return useMutation({
    mutationFn: () => instance.post(`/auth/login`, formData),
    onSuccess: (res) => {
      console.log(res);
      onLogInSuccess(res.headers.authorization);
    },
    onError: (error) => console.error('로그인 실패', error),
  });
};

export const onSilentRefresh = async () => {
  try {
    const res = await instance.post('/api/token/refresh', {
      userId: userId,
      accessToken: '',
      refreshToken: '',
    });
    if (res.status === 200) {
      // AccessToken을 변수로 저장
      onLogInSuccess(res.data.newAccessToken);
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      // refresh token 만료 - 로그인 페이지 이동
      console.log('refresh token 만료');
    }
  }
};
