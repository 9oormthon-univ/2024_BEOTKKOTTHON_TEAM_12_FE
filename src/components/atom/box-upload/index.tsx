import * as S from './style';
import image from 'assets/icons/image.svg';
import { Dispatch, SetStateAction } from 'react';
import { useFormDataActions, useShowImages } from 'store/formData';
import axios from 'axios';

const BoxUpload = () => {
  const showImages = useShowImages();
  const { setFormData, setShowImages, changeImgFileToString } = useFormDataActions();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const sendImgData = new FormData();

    for (let i = 0; i < files.length; i++) {
      sendImgData.append('files', files[i]);
    }

    await axios
      .post('http://43.201.189.171:8080/api/upload', sendImgData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('상품 이미지 업로드 성공', res);
        changeImgFileToString(res.data);
      })
      .catch((e) => console.log('상품 이미지 업로드 실패', e));

    if (files) {
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
      setFormData('product_image_list', files);
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
