import React from 'react';
import * as S from './style';
import { UserSection, MenuItem } from '../../components';

const MyPage: React.FC = () => {
  return (
    <S.MenuItemWrapper>
      <UserSection />
      <MenuItem />
    </S.MenuItemWrapper>
  );
};

export default MyPage;
