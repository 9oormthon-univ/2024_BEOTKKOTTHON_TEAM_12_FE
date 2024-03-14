import React from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from '@components/index';

const MyPage: React.FC = () => {
  return (
    <S.MenuItemWrapper>
      <UserSection />
      <MenuItem />
      <Nav currentTab="프로필" />
    </S.MenuItemWrapper>
  );
};

export default MyPage;
