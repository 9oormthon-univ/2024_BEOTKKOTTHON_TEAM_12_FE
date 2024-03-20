import React, { useEffect } from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from '@components/index';
import useStore from '../../store/userData';
const MyPage: React.FC = () => {
  const { userProfileInfo, initUserProfileInfo } = useStore();

  useEffect(() => {
    initUserProfileInfo();
  }, [initUserProfileInfo]);

  if (!userProfileInfo.user_name) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.MenuItemWrapper>
        <UserSection />
        <MenuItem />
      </S.MenuItemWrapper>
      <Nav currentTab="프로필" />
    </>
  );
};

export default MyPage;
