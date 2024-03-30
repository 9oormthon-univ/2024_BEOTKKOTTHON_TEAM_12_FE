import React, { useEffect } from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from 'components/index';
import useStore from '../../../store/userData';

const MyPageMain: React.FC = () => {
  const { initUserProfileInfo } = useStore();

  // useEffect(() => {
  //   initUserProfileInfo();
  // }, [initUserProfileInfo]);

  useEffect(() => {
    initUserProfileInfo();
  }, [initUserProfileInfo]);

  return (
    <>
      <S.MenuItemWrapper>
        <UserSection />
        <MenuItem />
      </S.MenuItemWrapper>
      <Nav currentTab="마이페이지" />
    </>
  );
};

export default MyPageMain;
