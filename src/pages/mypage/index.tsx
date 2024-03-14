import React from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from '@components/index';

const MyPage: React.FC = () => {
  return (
    <>
      <S.MenuItemWrapper>
        <S.ItemsSection>
          <UserSection />
          <MenuItem />
        </S.ItemsSection>
      </S.MenuItemWrapper>
      <Nav currentTab="프로필" />
    </>
  );
};

export default MyPage;
