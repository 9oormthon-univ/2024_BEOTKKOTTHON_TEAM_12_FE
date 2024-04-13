import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import { SetStateAction } from 'react';
import { useFormData, useFormDataActions } from 'store/formData';

const postImgUpload = async (sendData: FormData) => {
  const response = await instance.post('/upload', sendData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const useImgUploadMutation = (setImg?: React.Dispatch<SetStateAction<string>>) => {
  const formData = useFormData();
  const { setFormData } = useFormDataActions();

  return useMutation({
    mutationFn: postImgUpload,
    onSuccess: (res) => {
      console.log('상품 이미지 업로드 성공', res);

      if (setImg) {
        setImg(res);
      } else {
        setFormData('product_image', [...formData.product_image, ...res]);
      }
    },
    onError: (error) => console.log('상품 이미지 업로드 실패', error),
  });
};
