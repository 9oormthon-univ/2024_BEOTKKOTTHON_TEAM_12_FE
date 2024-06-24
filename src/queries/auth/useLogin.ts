import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import AUTH_API from 'apis/authApi';
import { AxiosError } from 'axios';
import { JWT_EXPIRRY_TIME, USER_ID } from 'constants/shared';
import { useCookies } from 'react-cookie';
import { useToken, useTokenActions } from 'store/token';
import { LoginFormData } from 'types/authType';

export const onLogInSuccess = (accessToken: string, refreshToken: any) => {
  console.log('로그인 성공');
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  setTimeout(() => {
    console.log('access토큰 재발급', JWT_EXPIRRY_TIME - 60000);
    onSilentRefresh(accessToken, refreshToken);
  }, JWT_EXPIRRY_TIME - 60000);
};

export const useLogin = (formData: LoginFormData) => {
  const { setToken } = useTokenActions();
  const [_, setCookie] = useCookies(['RT']);

  return useMutation({
    mutationFn: () => AUTH_API.postLoginData(formData),
    onSuccess: (res) => {
      console.log(res);
      setToken(res.headers.authorization);
      setCookie('RT', res.headers[`authorization-refresh`], { maxAge: 1200 });
      onLogInSuccess(res.headers.authorization, res.headers[`authorization-refresh`]);
    },
    onError: (error) => console.error('로그인 실패', error),
  });
};

export const onSilentRefresh = async (token: string, refreshToken: any) => {
  try {
    const res = await instance.post(`/api/token/refresh?userId=${USER_ID}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Authorization-Refresh': `Bearer ${refreshToken}`,
      },
    });
    console.log(res);
    if (res.status === 200) {
      // AccessToken을 변수로 저장
      onLogInSuccess(res.data.newAccessToken, refreshToken);
      return res.data.newAccessToken;
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      // refresh token 만료 - 로그인 페이지 이동
      console.log('refresh token 만료');
    } else {
      console.error('리프레시 토큰 갱신 중 오류:', error);
    }
    throw error;
  }
};
