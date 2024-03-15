import { Header, TextLabel } from '@components/index';
import React from 'react';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
const BlockedUsers = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <TextLabel text="차단한 사용자" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>
    </>
  );
};

export default BlockedUsers;
