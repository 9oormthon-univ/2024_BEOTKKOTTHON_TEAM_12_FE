import React from 'react';
import { ChatRoom } from 'types/types';

import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { levelUrlArr } from 'utils/levelUrlArr';
import TextLabel from 'components/atom/text-label';

interface ChatListItemProps {
  chatRooms: ChatRoom[];
  isWear?: boolean;
}
const ChatListItem: React.FC<ChatListItemProps> = ({ chatRooms, isWear }) => {
  const navigate = useNavigate();
  return (
    <div>
      {chatRooms.map((chat) => (
        <S.ChatItem
          key={chat.chat_room_id}
          onClick={() =>
            navigate(`/chat-detail`, {
              state: {
                isWear: isWear,
                productId: chat.product_id,
                chatRoomId: chat.chat_room_id,
              },
            })
          }
        >
          <S.ChatImage src={chat.user_profile_image} alt="Profile" />
          <S.ChatDetails>
            <S.SenderName>
              <TextLabel
                text={chat.user_nick_name}
                $weight={chat.user_level ? 500 : 700}
                size={14}
              />
              {chat.user_level && <img src={levelUrlArr(chat.user_level)} alt="level" />}
            </S.SenderName>
            <S.LastMessage>{chat.last_massage ? chat.last_massage : ''}</S.LastMessage>
          </S.ChatDetails>
          <S.ChatRightContainer>
            <S.Timestamp>{chat.timestamp ? chat.timestamp : ''}</S.Timestamp>
            {/* {chat.unreadCount > 0 && <S.UnreadCount>{chat.unreadCount}</S.UnreadCount>} */}
          </S.ChatRightContainer>
        </S.ChatItem>
      ))}
    </div>
  );
};

export default ChatListItem;
