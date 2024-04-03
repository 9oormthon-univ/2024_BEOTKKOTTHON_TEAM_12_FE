import { Button, TextLabel } from 'components/index';
import * as S from './style';
import React, { useRef, ChangeEvent, useState } from 'react';
import noImg from 'assets/images/profile-no-image.png';
import axios from 'axios';
import { instance } from 'apis';
import { useMutation } from '@tanstack/react-query';

interface ImageInputProps {
  image: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ image }) => {
  const [img, setImg] = useState(image || noImg);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ImgUploadMutation = useMutation({
    mutationFn: (sendData: FormData) =>
      instance.post('http://43.201.189.171:8080/api/upload', sendData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: (res) => {
      console.log('상품 이미지 업로드 성공', res.data);
      setImg(res.data);
    },
    onError: (error) => console.log('상품 이미지 업로드 실패', error),
  });

  const getImgUrl = async (file: File) => {
    const sendImgData = new FormData();
    sendImgData.append('files', file);
    ImgUploadMutation.mutate(sendImgData);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      getImgUrl(file);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.focus();
    fileInputRef.current?.click();
  };

  return (
    <S.ImageWrapper>
      <TextLabel text="프로필 이미지 변경" size={16} color="var(--grey-7)" />
      <S.BoxUpload htmlFor="imgInput" onClick={handleClickUpload}>
        <S.Image src={img} alt="img" />
      </S.BoxUpload>

      <Button
        children="사진 업로드"
        $padding="5px"
        $borderRadius="20px"
        width="100px"
        color="var(--grey-7)"
        handleOnClick={handleClickUpload}
      />

      <S.RemoveInput
        id="imgInput"
        as="input"
        type="file"
        name="imgs"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        ref={fileInputRef}
      />
    </S.ImageWrapper>
  );
};

export default ImageInput;
