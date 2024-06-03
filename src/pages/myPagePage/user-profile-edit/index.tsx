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
import { useProfileEditQuery } from 'queries/user/useProfileEditQuery';
import { useChangeProfile } from 'queries/user/useChangeProfileMutation';

const UserProfileEdit = () => {
  const height = `calc(100svh - var(--header-size))`;
  const { mutate: changeProfile } = useChangeProfile();
  const [userInfo, setUserInfo] = useState({
    nick_name: '',
    profile_image: [] as string[],
    style: [] as string[],
  });

  const { data: profileEditQuery, status } = useProfileEditQuery(setUserInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleChangeStyleTag = (newStyle: string[]) => {
    setUserInfo({ ...userInfo, style: newStyle });
  };

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          내 프로필
        </TextLabel>
        <ButtonBack className="left" />
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
            name="nick_name"
            value={userInfo.nick_name}
            labelSize={16}
            onChange={handleChange}
          />
          <ImageInput profileEditQuery={profileEditQuery} />
          <TagInput
            $padding="20px"
            currentStyle={userInfo.style}
            handleChange={handleChangeStyleTag}
          />
        </>
      )}
    </>
  );
};

export default UserProfileEdit;
