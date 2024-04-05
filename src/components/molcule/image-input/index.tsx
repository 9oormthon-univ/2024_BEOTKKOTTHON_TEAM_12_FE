import { Button, TextLabel } from 'components/index';
import * as S from './style';
import React, { useRef, ChangeEvent, useState } from 'react';
import noImg from 'assets/images/profile-no-image.png';
import { useImgUploadMutation } from 'hooks/queries/image-upload/useImgUploadMutaion';

interface ImageInputProps {
  image: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ image }) => {
  const [img, setImg] = useState(image || noImg);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: ImgUploadMutation } = useImgUploadMutation(setImg);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const sendImgData = new FormData();
      sendImgData.append('files', file);
      ImgUploadMutation(sendImgData);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current?.focus();
    fileInputRef.current?.click();
  };

  return (
    <S.ImageWrapper>
      <TextLabel size={16} color="var(--grey-7)">
        프로필 이미지 변경
      </TextLabel>
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
