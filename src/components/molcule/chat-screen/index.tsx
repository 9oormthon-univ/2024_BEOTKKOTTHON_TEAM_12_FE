import { ChatMessage } from '@components/index';
import styled from 'styled-components';

const ChatContainer = styled.div`
  padding: 20px 20px;
`;

interface ChatScreenProps {
  messages: {
    id: string;
    content: string | File;
    timestamp: string;
    isMine: boolean;
    profilePic: string;
  }[];
}
const ChatScreen: React.FC<ChatScreenProps> = ({ messages }) => {
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
