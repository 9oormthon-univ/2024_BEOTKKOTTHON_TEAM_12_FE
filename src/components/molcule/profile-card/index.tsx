import React, { useEffect } from 'react';
import * as S from './style';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';
import defaultImg from '@assets/images/profile-default-image.svg';
import arrow from '@assets/icons/arrow.svg';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { useNavigate } from 'react-router-dom';
import useStore, { useUserProfileInfo } from '../../../store/userData';
import { instance } from 'src/apis';

const ProfileCard: React.FC = () => {
  const { updateUserProfileInfo } = useStore();
  const navigate = useNavigate();
  const userProfile = useUserProfileInfo();

  // 로그인된 사용자 id 필요
  const userId = 1;

  const getData = async () => {
    await instance
      .get(`users/${userId}`)
      .then((res) => {
        console.log('마이페이지 데이터 가져오기 성공', res);
        updateUserProfileInfo(res.data);
      })
      .catch((e) => {
        console.log('마이페이지 데이터 가져오기 실패', e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
