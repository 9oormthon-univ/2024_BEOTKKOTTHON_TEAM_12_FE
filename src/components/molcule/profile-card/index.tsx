import React from 'react';
import * as S from './style';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '@assets/images/profile-default-image.svg';
import arrow from '@assets/icons/arrow.svg';
import profileIconLevel1 from '@assets/icons/profile-icon-level1.svg';
import { useNavigate } from 'react-router-dom';
import useStore from '../../../store/userData';

const ProfileCard: React.FC = () => {
  const { userProfileInfo } = useStore();
  const navigate = useNavigate();
  const userProfile = userProfileInfo;

  const onModifyProfile = () => {
    navigate('/mypage/profile-edit');
  };

  return (
    <S.ProfileCardWrapper>
      <S.RightContainer>
        <ProfileAvatar imageUrl={defaultImg} />
      </S.RightContainer>

      <S.MiddleContainer>
        <S.UserNameWrapper>
          <TextLabel text={userProfile.user_name} size={18} />
          <S.Image src={profileIconLevel1} alt="profile level" />
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
