import { Header, Tab, TextLabel } from '@components/index';
import React from 'react';
import arrow from '@assets/icons/arrow.svg';
import * as S from './style';
const SalesHistory = () => {
  return (
    <>
      <Header>
        <TextLabel text="판매내역" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" />
      </Header>
      <S.MarginContainer />
      <Tab />
    </>
  );
};

export default SalesHistory;
