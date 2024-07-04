import { AxiosError } from 'axios';
import { AT_TIME, USER_ID } from 'constants/shared';
import { instance } from 'service/service';

export const onLoginInSuccess = (accessToken: string, refreshToken: any) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  setTimeout(() => {
    onSilentRefresh(accessToken, refreshToken);
  }, AT_TIME - 60000);
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
      onLoginInSuccess(res.headers.authorization, refreshToken);
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
