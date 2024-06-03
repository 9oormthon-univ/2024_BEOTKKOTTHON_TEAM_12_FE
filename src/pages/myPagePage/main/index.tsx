import React from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav, Loading } from 'components/index';
import { useMypageMainQuery } from 'queries/user/useMypageMainQuery';
import { Navigate } from 'react-router-dom';

const MyPageMain: React.FC = () => {
  const { data: mypageMainQuery, status } = useMypageMainQuery();

  if (status === 'pending') return <Loading $height="100svh" />;
  if (status === 'error') return <Navigate replace to={`/login`} />;
  return (
    <>
      <S.MenuItemWrapper>
        <UserSection userData={mypageMainQuery} />
        <MenuItem />
      </S.MenuItemWrapper>
      <Nav currentTab="마이페이지" />
    </>
  );
};

export default MyPageMain;
