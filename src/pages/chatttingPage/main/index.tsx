import { Header, Loading, Nav, Search, TextLabel } from 'components/index';
import * as S from './style';
import { ChatRoom } from 'types/types';
import ChatListItem from 'components/molcule/chat-list-item';
import wearProfile from 'assets/images/wear_profile.svg';
import { instance } from 'apis';
import { useEffect, useState } from 'react';
import { useChattingList } from 'hooks/queries/chatting/useChattingList';

const ChattingMain: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  return (
    <>
      <Header>
        <TextLabel className="left" size={20} $weight={600}>
          채팅
        </TextLabel>
      </Header>
      <S.Container>
        <Search placeholder="닉네임, 상품 검색" />
        <ChatListItem />
      </S.Container>
      <Nav currentTab="채팅" />
    </>
  );
};

export default ChattingMain;
