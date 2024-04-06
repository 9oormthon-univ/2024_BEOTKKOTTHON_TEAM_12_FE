import { Button, TextLabel } from 'components/index';
import * as S from './style';
import { useRef, ChangeEvent, useState } from 'react';
import noImg from 'assets/images/profile-no-image.png';
import { useImgUploadMutation } from 'hooks/queries/image-upload/useImgUploadMutaion';
import { useQueryClient } from '@tanstack/react-query';
import { ProfileUserType } from 'types/userType';

const ImageInput = () => {
  const cache = useQueryClient();
  const { profile_image } = cache.getQueryData(['user']) as ProfileUserType;
  const [img, setImg] = useState(profile_image[0] || noImg);

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

      <S.SectionImgUpload>
        <S.BoxUpload htmlFor="imgInput" onClick={handleClickUpload}>
          <S.Image src={img} alt="img" />
        </S.BoxUpload>

        <Button
          fontSize="14px"
          $padding="5px 10px"
          $borderRadius="15px"
          width="87px"
          $letterSpacing="-1.2px"
          color="var(--grey-6)"
          handleOnClick={handleClickUpload}
        >
          사진 업로드
        </Button>
      </S.SectionImgUpload>

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
