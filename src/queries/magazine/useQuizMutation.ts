import { useMutation } from '@tanstack/react-query';
import MAGAZINE_API from 'apis/magazineApi';
export const useQuizMutation = () => {
  return useMutation({
    mutationFn: (totalPoints: number) => MAGAZINE_API.POST.postDonationData(totalPoints),
    onSuccess: (res) => console.log('퀴즈 점수 등록 성공', res.data),
    onError: (error) => console.log('퀴즈 점수 등록 실패', error),
  });
};
