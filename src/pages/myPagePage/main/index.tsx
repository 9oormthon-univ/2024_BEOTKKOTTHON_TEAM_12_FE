import React from 'react';
import * as S from './style';
import defaultProfile from 'assets/images/wear_profile.svg';
import { UserSection, MenuItem, Nav, Loading } from 'components/index';
import { useMypageMainQuery } from 'hooks/queries/user/useMypageMainQuery';

const noUserData = {
  user_name: 'WEAR',
  nick_name: '',
  university_name: '로그인 해주세요.',
  style: [],
  profile_image: [defaultProfile],
  level: '씨앗',
  next_level: '새싹',
  point: 0,
  remain_level_point: 100,
};

const MyPageMain: React.FC = () => {
  const { data: mypageMainQuery, status } = useMypageMainQuery();

  if (status === 'pending') return <Loading $height="100svh" />;

  return (
    <>
      <S.MenuItemWrapper>
        <UserSection userData={mypageMainQuery || noUserData} status={status} />
        <MenuItem />
      </S.MenuItemWrapper>
      <Nav currentTab="마이페이지" />
    </>
  );
};

export default MyPageMain;
