import React, { useEffect, useRef } from 'react';
import { ChatMessage } from '@components/index';
import styled from 'styled-components';

const ChatContainer = styled.div`
  padding: 20px 20px;
  overflow-y: auto;
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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      {/* ref를 줄 div*/}
      <div ref={messagesEndRef} />
    </ChatContainer>
  );
};

export default ChatScreen;
