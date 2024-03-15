import React from 'react';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { Header, TextLabel } from '@components/index';
import { useNavigate } from 'react-router-dom';

const UserProfileEdit = () => {
  const navigate = useNavigate();
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
    </>
  );
};

export default UserProfileEdit;
