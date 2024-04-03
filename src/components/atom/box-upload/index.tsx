import * as S from './style';
import image from 'assets/icons/image.svg';
import { useFormDataActions, useShowImages } from 'store/formData';
import { instance } from 'apis';
import { useMutation } from '@tanstack/react-query';

const postImgData = async (sendImgData: FormData) => {
  const response = await instance.post('http://43.201.189.171:8080/api/upload', sendImgData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log('상품 이미지 업로드 성공', response);
  return response.data;
};

const BoxUpload = () => {
  const showImages = useShowImages();
  const { setFormData, setShowImages } = useFormDataActions();

  const ImgUploadMutation = useMutation({
    mutationFn: (sendData: FormData) => postImgData(sendData),
    onSuccess: (data) => setFormData('product_image', data),
    onError: (error) => console.log('상품 이미지 업로드 실패', error),
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const sendImgData = new FormData();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        sendImgData.append('files', files[i]);
      }

      ImgUploadMutation.mutate(sendImgData);

      const imageLists = files;
      let imageUrlLists = [...showImages];

      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      if (imageUrlLists.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }
      setShowImages(imageUrlLists);
      setShowImages(imageUrlLists);
    }
  };

  return (
    <S.Container>
      <label htmlFor="product_image_list">
        <img src={image} alt="img" />
      </label>

      <input
        type="file"
        id="product_image_list"
        name="product_image_list"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
    </S.Container>
  );
};

export default BoxUpload;
