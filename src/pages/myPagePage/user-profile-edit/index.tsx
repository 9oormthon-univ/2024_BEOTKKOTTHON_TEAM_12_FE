import {
  Header,
  TextLabel,
  TextInput,
  ImageInput,
  TagInput,
  ButtonBack,
  Loading,
} from 'components/index';
import { useState } from 'react';
import { useProfileEditQuery } from 'hooks/queries/user/useProfileEditQuery';
import { useChangeProfile } from 'hooks/queries/user/useChangeProfileMutation';

const UserProfileEdit = () => {
  const { mutate: changeProfile } = useChangeProfile();
  const [userInfo, setUserInfo] = useState({
    user_name: '',
    nick_name: '',
    profile_image: [] as string[],
    style: [] as string[],
  });

  const { data: profileEditQuery, isLoading, isError } = useProfileEditQuery(setUserInfo);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, nick_name: e.target.value });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {!isLoading && (
        <>
          <Header>
            <TextLabel size={18} $weight={700}>
              내 프로필
            </TextLabel>
            <ButtonBack className="left" $marginLeft="10px" />
            <TextLabel
              className="right"
              onClick={() => changeProfile(userInfo)}
              size={18}
              $weight={700}
              color="var(--grey-5)"
            >
              저장
            </TextLabel>
          </Header>
          <TextInput
            label="닉네임"
            value={userInfo.nick_name}
            labelSize={16}
            onChange={handleChangeNickname}
          />
          <ImageInput profileEditQuery={profileEditQuery} />
          <TagInput />
        </>
      )}
    </>
  );
};

export default UserProfileEdit;
