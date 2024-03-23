import { Header, Nav, Search, TextLabel } from 'components/index';
import * as S from './style';
import { ChatRoom } from 'types/types';
import ChatListItem from 'components/molcule/chat-list-item';
import { instance } from 'apis';
import { useEffect, useState } from 'react';
import wearProfile from 'assets/images/wear_profile.svg';

const ChatHome: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const userId = localStorage.getItem('userId');

  const getChatList = async () => {
    // 채팅 리스트 가져오기
    const response = await instance.get(`/chat/rooms?userId=${userId}`);
    console.log(response);
    setChatRooms(
      response.data.map((chatRoom: ChatRoom) => ({
        product_id: chatRoom.product_id,
        chat_room_id: chatRoom.chat_room_id,
        user_profile_image: chatRoom.user_profile_image,
        user_level: chatRoom.user_level,
        user_nick_name: chatRoom.user_nick_name,
      }))
    );
  };

  const InfoMessage: ChatRoom[] = [
    {
      last_massage: `등록하신 <가져가세요> 상품이 5일동안 거래가`,
      timestamp: '10:00',
      user_profile_image: wearProfile,
      user_nick_name: '팀 WEAR',
    },
  ];

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <>
      <Header>
        <TextLabel className="left" text="채팅" size={20} $weight={600} />
      </Header>
      <S.Container>
        <Search placeholder="닉네임, 상품 검색" />
        <ChatListItem chatRooms={InfoMessage} isWear={true} />
        <ChatListItem chatRooms={chatRooms} />
      </S.Container>
      <Nav currentTab="채팅" />
    </>
  );
};

export default ChatHome;
