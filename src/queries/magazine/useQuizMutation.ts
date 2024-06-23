import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

export const useQuizMutation = () => {
  return useMutation({
    mutationFn: (totalPoints: number) => instance.post(`magazine/${USER_ID}?score=${totalPoints}`),
    onSuccess: (res) => console.log('퀴즈 점수 등록 성공', res.data),
    onError: (error) => console.log('퀴즈 점수 등록 실패', error),
  });
};
