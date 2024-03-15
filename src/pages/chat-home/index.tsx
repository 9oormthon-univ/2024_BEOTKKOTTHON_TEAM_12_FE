import { Header, Nav, Search, TextLabel } from '@components/index';
import React from 'react';
import * as S from './style';

const ChatHome = () => {
  return (
    <>
      <S.Container>
        <Header>
          <TextLabel className="left" text="채팅" size={20} weight={600} />
        </Header>
        <Search placeholder="닉네임, 상품 검색" />
      </S.Container>
      <Nav currentTab="채팅" />
    </>
  );
};

export default ChatHome;
`
  
`;
