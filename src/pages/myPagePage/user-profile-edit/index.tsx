import * as S from './style';
import arrow from 'assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useUserProfileActions, useUserProfileInfo } from '../../../store/userData';
import { instance } from '../../../apis/index';
import { useEffect, useState } from 'react';
import { userId, userProfile } from 'data/shared';
import { useQuery } from '@tanstack/react-query';

const getUserProfileData = async () => {
  try {
    const response = await instance.get(`/users/profile/${userId}`);
    console.log('프로필 정보 불러오기 성공', response.data);
    return response.data;
  } catch (e) {
    console.error('프로필 정보 불러오기 실패', e);
    return userProfile;
  }
};

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const userProfileInfo = useUserProfileInfo();
  const { updateUserProfileInfo } = useUserProfileActions();

  const { data, error, isLoading } = useQuery({
    queryKey: ['user', 'profile-edit'],
    queryFn: getUserProfileData,
  });

  useEffect(() => {
    if (data) {
      updateUserProfileInfo(data);
    }
  }, [data]);

  const [userProfileApiInfo, setUserProfileApiInfo] = useState({
    user_name: '',
    nick_name: '',
    profile_image: '',
    style: [],
  });

  /*프로필 정보를 저장하는 api 호출 */
  const postChangeProfileInfo = async () => {
    await instance
      .put(`/users/profile/${userId}`, {
        user_name: userProfileInfo.user_name,
        nick_name: userProfileInfo.nick_name,
        profile_image: userProfileInfo.profile_image,
        style: [...userProfileInfo.style],
      })
      .then((res) => {
        console.log('프로필 수정 성공', res.data);

        alert('저장되었습니다.');
        alert('저장되었습니다.');
      })
      .catch((e) => console.log('프로필 수정 실패', e));
  };

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserProfileInfo({ nick_name: e.target.value });
    setUserProfileApiInfo({ ...userProfileApiInfo, nick_name: e.target.value });
  };

  return (
    <>
      <Header>
        <TextLabel text="내 프로필" size={18} $weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <TextLabel
          className="right "
          onClick={postChangeProfileInfo}
          text="저장"
          size={18}
          $weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <TextInput
        label="닉네임"
        value={userProfileInfo.nick_name}
        labelSize={16}
        onChange={handleChangeNickname}
      />
      <ImageInput image={userProfileInfo.profile_image} />
      <TagInput />
    </>
  );
};

export default UserProfileEdit;
