import { Header, Nav, Search, TextLabel } from '@components/index';
import defualtImg from '@assets/images/profile-default-image.svg';
import * as S from './style';
import { ChatRoom } from 'src/types/types';
import ChatListItem from '@components/molcule/chat-list-item';

const ChatHome: React.FC = () => {
  const chatRooms: ChatRoom[] = [
    {
      id: '1',
      imageUrl: defualtImg,
      senderName: '김스옹',
      lastMessage: '어디서 만날까요?',
      timestamp: '4일전',
      unreadCount: 2,
    },
    {
      id: '2',
      imageUrl: defualtImg,
      senderName: '김스옹',
      lastMessage: '어디서 만날까요? djeltjdskndjkfbㅁㅇㅁㅇㅁㅇㅇjksbdfㅓㅜㅏㅓ늉률',
      timestamp: '4일전',
      unreadCount: 3,
    },
    {
      id: '3',
      imageUrl: defualtImg,
      senderName: '김스옹',
      lastMessage: '어디서 만날까요? djeltjdskndjkfbㅁㅇㅁㅇㅁㅇㅇjksbdfㅓㅜㅏㅓ늉률',
      timestamp: '4일전',
      unreadCount: 0,
    },
    {
      id: '4',
      imageUrl: defualtImg,
      senderName: '김스옹',
      lastMessage: '어디서 만날까요? ',
      timestamp: '4일전',
      unreadCount: 0,
    },
  ];
  return (
    <>
      <Header>
        <TextLabel className="left" text="채팅" size={20} weight={600} />
      </Header>
      <S.Container>
        <Search placeholder="닉네임, 상품 검색" />
        <ChatListItem chatRooms={chatRooms} />
      </S.Container>
      <Nav currentTab="채팅" />
    </>
  );
};

export default ChatHome;
`
  
`;
