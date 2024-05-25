import React from 'react';
import * as S from './style';
import defaultProfilePic from 'assets/images/profile-default-image.svg';
import { ChattingType } from 'types/chattingType';

interface ChatMessageProps {
  messageData: ChattingType;
}

const ChatMessage = ({ messageData }: ChatMessageProps) => {
  const { is_mine, message_image, timestamp, message } = messageData;

  return (
    <S.MessageContainer $ismine={is_mine}>
      {!is_mine && (
        <S.Avatar src={message_image ? message_image[0] : defaultProfilePic} alt="profile" />
      )}
      <S.MessageBubble $ismine={is_mine}>{message}</S.MessageBubble>
      <S.Timestamp>{timestamp}</S.Timestamp>
    </S.MessageContainer>
  );
};
export default ChatMessage;
