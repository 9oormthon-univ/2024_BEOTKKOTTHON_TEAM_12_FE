import {
  Header,
  TextLabel,
  TextInput,
  ImageInput,
  TagInput,
  ButtonBack,
  Loading,
  BoxError,
} from 'components/index';
import { useState } from 'react';
import { useProfileEditQuery } from 'hooks/queries/user/useProfileEditQuery';
import { useChangeProfile } from 'hooks/queries/user/useChangeProfileMutation';

const UserProfileEdit = () => {
  const height = `calc(100svh - var(--header-size))`;
  const { mutate: changeProfile } = useChangeProfile();
  const [userInfo, setUserInfo] = useState({
    nick_name: '',
    profile_image: [] as string[],
    style: [] as string[],
  });

  const { data: profileEditQuery, status } = useProfileEditQuery(setUserInfo);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, nick_name: e.target.value });
  };

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          내 프로필
        </TextLabel>
        <ButtonBack className="left" $marginLeft="10px" />
        <TextLabel
          className="right"
          onClick={() => status === 'success' && changeProfile(userInfo)}
          size={18}
          $weight={700}
          color="var(--grey-5)"
        >
          저장
        </TextLabel>
      </Header>
      {status === 'pending' && <Loading $height={height} />}
      {status === 'error' && (
        <BoxError $height={height}>프로필 정보를 불러오지 못했습니다.</BoxError>
      )}
      {status === 'success' && (
        <>
          <TextInput
            label="닉네임"
            value={userInfo.nick_name}
            labelSize={16}
            onChange={handleChangeNickname}
          />
          <ImageInput profileEditQuery={profileEditQuery} />
          <TagInput userInfo={userInfo} setUserInfo={setUserInfo} />
        </>
      )}
    </>
  );
};

export default UserProfileEdit;
