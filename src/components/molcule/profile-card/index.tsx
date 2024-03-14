import React from 'react';
import * as S from './style';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '@assets/images/profile-default-image.svg';
import arrow from '@assets/icons/arrow.svg';
import profileIconLevel1 from '@assets/icons/profile-icon-level1.svg';

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
    <S.ProfileCardWrapper>
      <S.RightContainer>
        <ProfileAvatar imageUrl={defaultImg} />
      </S.RightContainer>

      <S.MiddleContainer>
        <S.UserNameWrapper>
          <TextLabel text={userProfile.nickname} size={18} />
          <S.Image src={profileIconLevel1} alt="profile level" />
        </S.UserNameWrapper>
        <TextLabel text={userProfile.university} size={16} color="var(--grey-5)" />

        <S.ButtonContainer>
          {userProfile.style.map((style, index) => (
            <ProfileButton
              key={index}
              text={style}
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
