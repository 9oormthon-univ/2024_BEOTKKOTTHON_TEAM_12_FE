import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from '@components/index';
import { useNavigate } from 'react-router-dom';
import noImg from '@assets/images/profile-no-image.png';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const userProfileInfo = {
    nickName: '김서영',
    image: noImg,
    styleTag: ['페미닌', '빈티지', '캐주얼'],
  };

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
  const postChangeAccountInfo = () => {
    console.log('저장하기');
  };

  return (
    <>
      <Header>
        <TextLabel text="내 프로필" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <S.HederLeft
          className="right "
          onClick={postChangeAccountInfo}
          text="저장"
          size={16}
          weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <TextInput label="닉네임" value={userProfileInfo.nickName} labelSize={16} />
      <ImageInput image={userProfileInfo.image} />
      <TagInput styleTags={styleTags} userStyleTags={userProfileInfo.styleTag} />
    </>
  );
};

export default UserProfileEdit;
