import React from 'react';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '../../../assets/images/profile-default-image.svg';
import arrow from '../../../assets/icons/arrow.svg';
import profileIconLevel1 from '../../../assets/icons/profile-icon-level1.svg';
import styled from 'styled-components';

export const ProfileCardWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  margin: 20px auto 10px auto;
  border-radius: 10px;

  background-color: var(--grey-1);
  border: 1px solid var(--grey-3);
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  gap: 4px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
        <TextLabel text={userProfile.university} size={16} color="var(--grey-5)" />

        <ButtonContainer>
          {userProfile.style.map((style, index) => (
            <ProfileButton
              key={index}
              text={style}
              color="var(--grey-6)"
              borderColor="var(--grey-3)"
            />
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
