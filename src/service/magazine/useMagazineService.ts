import { useMutation } from '@tanstack/react-query';
import magazineService from './magazineService';

export const useQuiz = () => {
  return useMutation({
    mutationFn: (totalPoints: number) => magazineService.POST.postQuiz(totalPoints),
  });
};
