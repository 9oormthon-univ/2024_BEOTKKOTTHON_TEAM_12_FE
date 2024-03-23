import * as S from './style';
import image from '@assets/icons/image.svg';
import { instance } from 'src/apis';
import { Dispatch, SetStateAction } from 'react';
import { useFormDataActions, useShowImages } from 'src/store/formData';
import axios from 'axios';

interface BoxUploadProps {
  setFiles: Dispatch<SetStateAction<FileList | null>>;
}

// const BoxUpload = () => {
const BoxUpload = ({ setFiles }: BoxUploadProps) => {
  const showImages = useShowImages();
  const { setFormData, setShowImages } = useFormDataActions();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    // await axios({
    //   method: 'post',
    //   url: 'http://43.201.189.171:8080/api/upload',
    //   data: files,
    //   timeout: 10000,
    // })
    await instance
      .post('/upload', { files: files })
      .then((res) => {
        console.log('파일 업로드 성공', res);
      })
      .catch((e) => {
        console.log('파일 업로드 실패', e);
      });

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
      setFiles(files);
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
