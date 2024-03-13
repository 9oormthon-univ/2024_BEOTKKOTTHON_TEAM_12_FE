import React from 'react';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '../../../assets/images/profile-default-image.png';
import arrow from '../../../assets/icons/arrow.svg';
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
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3px;
  gap: 3px;
`;

const ProfileCard: React.FC = () => {
  return (
    <ProfileCardWrapper>
      <RightContainer>
        <ProfileAvatar imageUrl={defaultImg} />
      </RightContainer>
      <MiddleContainer>
        <TextLabel text="김스옹" size={18} />
        <TextLabel text="성균관대학교 서울캠퍼스" size={16} color="#9E9E9E" />

        <ButtonContainer>
          <ProfileButton text="캐주얼" color="#777777" borderColor="#e2e2e2" />
          <ProfileButton text="페미닌" color="#777777" borderColor="#e2e2e2" />
          <ProfileButton text="빈티지" color="#777777" borderColor="#e2e2e2" />
        </ButtonContainer>
      </MiddleContainer>

      <LeftContainer>
        <img src={arrow} alt="프로필 수정" />
      </LeftContainer>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
