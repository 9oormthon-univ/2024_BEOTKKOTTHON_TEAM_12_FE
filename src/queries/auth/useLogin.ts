import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import AUTH_API from 'apis/authApi';
import { AxiosError } from 'axios';
import { AT_TIME, RT_TIME, USER_ID } from 'constants/shared';
import { useCookies } from 'react-cookie';
import { useTokenActions } from 'store/token';
import { LoginFormData } from 'types/authType';

export const onLogInSuccess = (accessToken: string, refreshToken: any) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  setTimeout(() => {
    onSilentRefresh(accessToken, refreshToken);
  }, AT_TIME - 60000);
};

export const useLogin = (formData: LoginFormData) => {
  const { setToken } = useTokenActions();
  const [_, setCookie] = useCookies(['RT']);

  return useMutation({
    mutationFn: () => AUTH_API.POST.loginData(formData),
    onSuccess: (res) => {
      console.log(res);
      setToken(res.headers.authorization);
      setCookie('RT', res.headers[`authorization-refresh`], { maxAge: RT_TIME });
      onLogInSuccess(res.headers.authorization, res.headers[`authorization-refresh`]);
    },
    onError: (error) => console.error('로그인 실패', error),
  });
};

export const onSilentRefresh = async (token: string, refreshToken: any) => {
  try {
    const res = await instance.post(`/token/refresh?userId=${USER_ID}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Authorization-Refresh': `Bearer ${refreshToken}`,
      },
    });
    if (res.status === 200) {
      onLogInSuccess(res.headers.authorization, refreshToken);
      return res.data.newAccessToken;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      console.log('refresh token 만료');
    } else {
      console.error('리프레시 토큰 갱신 중 오류:', error);
    }
    throw error;
  }
};
