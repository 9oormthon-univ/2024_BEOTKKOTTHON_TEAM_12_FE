import { Button, TextLabel } from '@components/index';
import * as S from './style';
import React, { useRef, ChangeEvent, useState, useEffect } from 'react';
import noImg from '@assets/images/profile-no-image.png';
import useStore from '../../../store/userData';

interface ImageInputProps {
  image: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ image }) => {
  const { userProfileInfo, updateUserProfileInfo } = useStore();
  // image prop이 있으면 사용하고, 없으면 noImg를 사용
  const [newImage, setNewImage] = useState(image || noImg);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // URL을 생성
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl);
      updateUserProfileInfo({ profile_image: imageUrl });
      console.log(userProfileInfo);
    }
  };

  // 컴포넌트가 언마운트되기 전에 메모리에서 URL을 정리
  useEffect(() => {
    return () => {
      if (newImage !== noImg) {
        URL.revokeObjectURL(newImage);
      }
    };
  }, [newImage]);

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <S.ImageWrapper>
      <TextLabel text="프로필 이미지 변경" size={16} color="var(--grey-7)" />
      <S.BoxUpload htmlFor="img">
        <S.Image src={newImage} alt="img" />
      </S.BoxUpload>

      <Button
        children="사진 업로드"
        padding="5px"
        borderRadius="20px"
        width="100px"
        color="var(--grey-7)"
        handleOnClick={handleClickUpload}
      />

      <S.RemoveInput
        as="input"
        type="file"
        id="img"
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
