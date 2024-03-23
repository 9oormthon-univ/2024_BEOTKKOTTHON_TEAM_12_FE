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
  console.log(userProfile);

  return (
    <S.ProfileCardWrapper>
      <S.RightContainer>
        <ProfileAvatar imageUrl={userProfile.profile_image} />
      </S.RightContainer>

      <S.MiddleContainer>
        <S.UserNameWrapper>
          <TextLabel text={userProfile.user_name} size={18} />
          <S.Image src={levelUrlArr(userProfile.level)} alt="profile level" />
        </S.UserNameWrapper>
        <TextLabel text={userProfile.university_name} size={16} color="var(--grey-5)" />

        <S.ButtonContainer>
          {userProfile.style.map((style, index) => (
            <ProfileButton
              key={index}
              children={style}
              color="var(--grey-6)"
              borderColor="var(--grey-3)"
            />
          ))}
        </S.ButtonContainer>
      </S.MiddleContainer>

      <S.LeftContainer>
        <S.Image src={arrow} alt="프로필 수정" onClick={onModifyProfile} />
      </S.LeftContainer>
    </S.ProfileCardWrapper>
  );
};

export default ProfileCard;
