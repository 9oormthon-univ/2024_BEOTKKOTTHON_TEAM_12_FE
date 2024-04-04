import React from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav, Loading } from 'components/index';
import { useMypageMainQuery } from 'hooks/queries/user/useMypageMainQuery';

const MyPageMain: React.FC = () => {
  const mypageMainQuery = useMypageMainQuery();

  return (
    <>
      <S.MenuItemWrapper>
        {mypageMainQuery.isLoading ? (
          <Loading />
        ) : (
          <>
            <UserSection />
            <MenuItem />
          </>
        )}
      </S.MenuItemWrapper>
      <Nav currentTab="마이페이지" />
    </>
  );
};

export default MyPageMain;
