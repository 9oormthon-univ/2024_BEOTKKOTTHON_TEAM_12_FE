import { ChatMessage } from '@components/index';
import styled from 'styled-components';

const ChatContainer = styled.div`
  padding: 20px 10px;
`;
const messages = [
  {
    id: '1',
    content: '안녕하세요!',
    timestamp: '오후 12:00',
    isMine: false,
    profilePic: '',
  },
  {
    id: '2',
    content: '구매하고싶어요!',
    timestamp: '오후 12:01',
    isMine: false,
    profilePic: '',
  },
  {
    id: '3',
    content: '가능합니다!',
    timestamp: '오후 12:01',
    isMine: true,
    profilePic: '',
  },
];

const ChatScreen = () => {
  return (
    <ChatContainer>
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          content={msg.content}
          timestamp={msg.timestamp}
          isMine={msg.isMine}
          profilePic={msg.profilePic}
        />
      ))}
    </ChatContainer>
  );
};

export default ChatScreen;
