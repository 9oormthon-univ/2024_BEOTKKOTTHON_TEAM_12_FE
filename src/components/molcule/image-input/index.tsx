import { Button, TextLabel } from 'components/index';
import * as S from './style';
import React, { useRef, ChangeEvent, useState, useEffect } from 'react';
import noImg from 'assets/images/profile-no-image.png';
import useStore, { useUserProfileInfo } from '../../../store/userData';
import { instance } from 'apis';
import axios from 'axios';

interface ImageInputProps {
  image: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ image }) => {
  const { userProfileInfo, updateUserProfileInfo } = useStore();
  // image prop이 있으면 사용하고, 없으면 noImg를 사용
  const [newImage, setNewImage] = useState(image || noImg);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const getImgUrl = async (file: File) => {
    const sendImgData = new FormData();
    sendImgData.append('files', file);

    await axios
      .post('http://43.201.189.171:8080/api/upload', sendImgData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('상품 이미지 업로드 성공', res);
        setNewImage(res.data);
        updateUserProfileInfo({ profile_image: res.data[0] });
      })
      .catch((e) => console.log('상품 이미지 업로드 실패', e));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      getImgUrl(file);
    }
  };

  // 컴포넌트가 언마운트되기 전에 메모리에서 URL을 정리
  // useEffect(() => {
  //   return () => {
  //     if (userProfileInfo.profile_image !== noImg) {
  //       URL.revokeObjectURL(newImage);
  //     }
  //   };
  // }, [newImage]);

  const handleClickUpload = () => {
    fileInputRef.current?.focus();
    fileInputRef.current?.click();
  };

  // const getImageUrl = async () => {
  //   const response = await instance.post(`/upload`, [newImage]);
  //   console.log(response);
  // };

  return (
    <S.ImageWrapper>
      <TextLabel text="프로필 이미지 변경" size={16} color="var(--grey-7)" />
      <S.BoxUpload htmlFor="imgInput" onClick={handleClickUpload}>
        <S.Image src={userProfileInfo.profile_image} alt="img" />
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
