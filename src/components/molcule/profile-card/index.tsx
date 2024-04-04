import React from 'react';
import * as S from './style';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';

import arrow from 'assets/icons/arrow.svg';
import { levelUrlArr } from 'utils/levelUrlArr';
import { useNavigate } from 'react-router-dom';
import { useUserProfileInfo } from '../../../store/userData';

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();
  const userProfile = useUserProfileInfo();

  const onModifyProfile = () => {
    navigate('/mypage/profile-edit');
  };

  return (
    <S.ProfileCardWrapper>
      <ProfileAvatar imageUrl={userProfile.profile_image} />

      <S.MiddleContainer>
        <S.UserNameWrapper>
          <TextLabel size={16} color="var(--grey-7)">
            {userProfile.user_name}
          </TextLabel>
          <img
            src={levelUrlArr(userProfile.level)}
            alt="profile level"
            width="11px"
            height="11px"
          />
        </S.UserNameWrapper>
        <TextLabel size={14} color="var(--grey-5)">
          {userProfile.university_name}
        </TextLabel>

        <S.ButtonContainer>
          {userProfile.style.map((style, index) => (
            <ProfileButton key={index}>{style}</ProfileButton>
          ))}
        </S.ButtonContainer>
      </S.MiddleContainer>

      <S.BtnArrow src={arrow} alt="프로필 수정" onClick={onModifyProfile} />
    </S.ProfileCardWrapper>
  );
};

export default ProfileCard;
