import * as S from './style';
import arrow from 'assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProfileEditQuery } from 'hooks/queries/user/useProfileEditQuery';
import { useChangeProfile } from 'hooks/queries/user/useChangeProfileMutation';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const { mutate: changeProfile } = useChangeProfile();
  const [userInfo, setUserInfo] = useState({
    user_name: '',
    nick_name: '',
    profile_image: '',
    style: [] as string[],
  });

  const profileEditQuery = useProfileEditQuery(setUserInfo);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, nick_name: e.target.value });
  };

  return (
    <>
      {!profileEditQuery.isLoading && (
        <>
          <Header>
            <TextLabel text="내 프로필" size={18} $weight={700} />
            <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
            <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
            <TextLabel
              className="right "
              onClick={() => changeProfile(userInfo)}
              text="저장"
              size={18}
              $weight={700}
              color="var(--grey-5)"
            />
          </Header>
          <TextInput
            label="닉네임"
            value={userInfo.nick_name}
            labelSize={16}
            onChange={handleChangeNickname}
          />
          <ImageInput image={userInfo.profile_image} />
          <TagInput />
        </>
      )}
    </>
  );
};

export default UserProfileEdit;
