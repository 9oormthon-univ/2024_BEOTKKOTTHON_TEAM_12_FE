import { useMutation } from '@tanstack/react-query';
import imageService from './imageService';

export const useImageUpload = () => {
  return useMutation({
    mutationFn: (formData: FormData) => imageService.POST.upload(formData),
    onError: (error) => console.log('상품 이미지 업로드 실패', error),
  });
};
