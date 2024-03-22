import React from 'react';
import { ChatRoom } from 'src/types/types';

import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { levelUrlArr } from 'src/utils/levelUrlArr';
interface ChatListItemProps {
  chatRooms: ChatRoom[];
}
const ChatListItem: React.FC<ChatListItemProps> = ({ chatRooms }) => {
  const navigate = useNavigate();
  return (
    <div>
      {chatRooms.map((chat) => (
        <S.ChatItem
          key={chat.id}
          onClick={() =>
            navigate(`/chat-detail`, {
              state: { productId: chat.product_id, chatRoomId: chat.chat_room_id },
            })
          }
        >
          <S.ChatImage src={chat.user_profile_image} alt="Profile" />
          <S.ChatDetails>
            <S.SenderName>

              {chat.user_nick_name}
              <img src={levelUrlArr(chat.user_level)} alt="level" />

            </S.SenderName>
            <S.LastMessage>{'마지막 메세지'}</S.LastMessage>
          </S.ChatDetails>
          <S.ChatRightContainer>
            <S.Timestamp>{'보낸 시간'}</S.Timestamp>
            {/* {chat.unreadCount > 0 && <S.UnreadCount>{chat.unreadCount}</S.UnreadCount>} */}
          </S.ChatRightContainer>
        </S.ChatItem>
      ))}
    </div>
  );
};

export default ChatListItem;
