import React from 'react';
import styled from 'styled-components';

export const RoundImage = styled.img`
  width: 55px;
  height: 55px;
  margin: 5px;
  border: 1px solid var(--grey-3);
  border-radius: 50%;
`;

interface ProfileAvatarProps {
  imageUrl: string;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ imageUrl }) => {
  return <RoundImage src={imageUrl} alt="프로필 사진" />;
};

export default ProfileAvatar;
