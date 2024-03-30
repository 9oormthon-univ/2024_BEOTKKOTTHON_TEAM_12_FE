import * as S from './style';
import arrow from 'assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from 'components/index';
import { useNavigate } from 'react-router-dom';
import useStore, { useUserProfileInfo } from '../../../store/userData';
import { instance } from '../../../apis/index';
import { useEffect, useState } from 'react';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const { updateUserProfileInfo } = useStore();
  const userProfileInfo = useUserProfileInfo();
  const [userProfileApiInfo, setUserProfileApiInfo] = useState({
    user_name: '',
    nick_name: '',
    profile_image: '',
    style: [],
  });

  const userId = localStorage.getItem('userId');

  const getData = async () => {
    await instance.get(`/users/profile/${userId}`).then((res) => {
      console.log('프로필 수정', res);
      console.log('프로필 수정', res);
      setUserProfileApiInfo({
        user_name: res.data.user_name,
        nick_name: res.data.nick_name,
        profile_image: res.data.profile_image,
        style: res.data.style,
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  /*프로필 정보를 저장하는 api 호출 */
  const postChangeProfileInfo = async () => {
    console.log({
      ...userProfileApiInfo,
      profile_image: userProfileInfo.profile_image,
      style: [...userProfileInfo.style],
    });
    await instance
      .put(`/users/profile/${userId}`, {
        ...userProfileApiInfo,
        profile_image: userProfileInfo.profile_image,
        style: [...userProfileInfo.style],
      })
      .then((res) => {
        console.log('프로필 수정 성공', res.data);
        // updateUserProfileInfo(res.data);

        alert('저장되었습니다.');
        alert('저장되었습니다.');
      })
      .catch((e) => console.log('프로필 수정 실패', e));
  };

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        value={userProfileApiInfo.nick_name}
        labelSize={16}
        onChange={handleNickNameChange}
      />
      <ImageInput image={userProfileApiInfo.profile_image} />
      <TagInput />
    </>
  );
};

export default UserProfileEdit;
