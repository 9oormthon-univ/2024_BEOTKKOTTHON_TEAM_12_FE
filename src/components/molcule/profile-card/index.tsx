import React from 'react';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '../../../assets/images/profile-default-image.svg';
import arrow from '../../../assets/icons/arrow.svg';
import profileIconLevel1 from '../../../assets/icons/profile-icon-level1.svg';
import styled from 'styled-components';

export const ProfileCardWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;

  background-color: #fbfbfb; //grey1
  border: 1px solid #e2e2e2; //grey3
`;

export const RightContainer = styled.div`
  padding: 8px;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  gap: 4px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3px;
  gap: 3px;
`;

export const Image = styled.img``;

const ProfileCard: React.FC = () => {
  const userProfile = {
    nickname: '김스옹',
    university: '성균관대학교 서울캠퍼스',
    profileImg: defaultImg,
    level: 1,
    style: ['캐주얼', '페미닌', '빈티지'],
  };

  const onModifyProfile = () => {
    console.log('프로필 수정');
  };

  return (
    <ProfileCardWrapper>
      <RightContainer>
        <ProfileAvatar imageUrl={defaultImg} />
      </RightContainer>

      <MiddleContainer>
        <UserNameWrapper>
          <TextLabel text={userProfile.nickname} size={18} />
          <Image src={profileIconLevel1} alt="profile level" />
        </UserNameWrapper>
        <TextLabel text={userProfile.university} size={16} color="#9E9E9E" />

        <ButtonContainer>
          {userProfile.style.map((style, index) => (
            <ProfileButton key={index} text={style} color="#777777" borderColor="#e2e2e2" />
          ))}
        </ButtonContainer>
      </MiddleContainer>

      <LeftContainer>
        <Image src={arrow} alt="프로필 수정" onClick={onModifyProfile} />
      </LeftContainer>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
