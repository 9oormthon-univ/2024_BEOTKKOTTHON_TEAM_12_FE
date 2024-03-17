import React from 'react';
import { ChatRoom } from 'src/types/types';

import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface ChatListItemProps {
  chatRooms: ChatRoom[];
}
const ChatListItem: React.FC<ChatListItemProps> = ({ chatRooms }) => {
  const navigate = useNavigate();
  return (
    <div>
      {chatRooms.map((chat) => (
        <S.ChatItem key={chat.id} onClick={() => navigate(`/chat-detail/${chat.id}`)}>
          <S.ChatImage src={chat.imageUrl} alt="Profile" />
          <S.ChatDetails>
            <S.SenderName>{chat.senderName}</S.SenderName>
            <S.LastMessage>{chat.lastMessage}</S.LastMessage>
          </S.ChatDetails>
          <S.ChatRightContainer>
            <S.Timestamp>{chat.timestamp}</S.Timestamp>
            {chat.unreadCount > 0 && <S.UnreadCount>{chat.unreadCount}</S.UnreadCount>}
          </S.ChatRightContainer>
        </S.ChatItem>
      ))}
    </div>
  );
};

export default ChatListItem;
