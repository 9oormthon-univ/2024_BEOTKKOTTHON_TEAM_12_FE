import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from '@components/index';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store/userData';
import { instance } from '../../apis/index';
import { useState } from 'react';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const { userProfileInfo, updateUserProfileInfo } = useStore();
  const [userProfileApiInfo, setUserProfileApiInfo] = useState({
    user_name: userProfileInfo.user_name,
    nick_name: userProfileInfo.nick_name,
    profile_image: userProfileInfo.profile_image,
    style: userProfileInfo.style,
  });
  const styleTags = [
    '심플베이직',
    '캐주얼',
    '모던시크',
    '러블리',
    '로맨틱',
    '유니크',
    '빈티지',
    '페미닌',
    '오피스룩',
    '캠퍼스룩',
    '스트릿',
    '섹시글램',
    '아메카지',
  ];

  /*프로필 정보를 저장하는 api 호출 */
  const postChangeProfileInfo = async () => {
    const userId = '1';
    try {
      console.log(userProfileApiInfo);
      const response = await instance.post(`/users/profile/${userId}`, userProfileInfo);

      if (response.status === 200) {
        // 성공적으로 업데이트되면 Zustand 상태를 업데이트
        useStore.getState().updateUserProfileInfo(response.data);
        alert('저장되었습니다.');
      } else {
        // 서버에서 예상치 못한 응답을 받았을 경우
        console.error('서버 상태 업데이트 실패:', response);
        alert('저장에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 네트워크 오류나 서버 오류 등의 예외 처리
      console.error('서버에 저장하는 중 오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserProfileInfo({ nick_name: e.target.value });
    setUserProfileApiInfo({ ...userProfileApiInfo, nick_name: e.target.value });
  };

  return (
    <>
      <Header>
        <TextLabel text="내 프로필" size={18} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <TextLabel
          className="right "
          onClick={postChangeProfileInfo}
          text="저장"
          size={18}
          weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <TextInput
        label="닉네임"
        value={userProfileInfo.nick_name}
        labelSize={16}
        onChange={handleNickNameChange}
      />
      <ImageInput image={userProfileInfo.profile_image} />
      <TagInput styleTags={styleTags} userStyleTags={userProfileInfo.style} />
    </>
  );
};

export default UserProfileEdit;
