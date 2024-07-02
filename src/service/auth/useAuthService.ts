import { useMutation } from '@tanstack/react-query';
import { LoginFormData } from 'types/authType';
import { useTokenActions } from 'store/token';
import { useCookies } from 'react-cookie';
import { RT_TIME } from 'constants/shared';
import { onLoginInSuccess } from 'hooks/useAuth';
import authService from './authService';

export function useLogin() {
  const { setToken } = useTokenActions();
  const [_, setCookie] = useCookies(['RT']);

  return useMutation({
    mutationFn: ({ id, password }: LoginFormData) => authService.POST.login({ id, password }),
    onSuccess: (res: any) => {
      setToken(res.headers.authorization);
      setCookie('RT', res.headers[`authorization-refresh`], { maxAge: RT_TIME });
      onLoginInSuccess(res.headers.authorization, res.headers[`authorization-refresh`]);
    },
    onError: (error: any) => {
      console.error('Create photo error:', error);
    },
  });
}
