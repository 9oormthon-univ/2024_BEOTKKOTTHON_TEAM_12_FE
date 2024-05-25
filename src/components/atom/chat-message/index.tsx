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
    <S.Container $ismine={is_mine}>
      {!is_mine && (
        <S.Profile src={message_image ? message_image[0] : defaultProfilePic} alt="profile" />
      )}
      <S.Bubble $ismine={is_mine}>{message}</S.Bubble>
      <S.Timestamp $ismine={is_mine}>{timestamp}</S.Timestamp>
    </S.Container>
  );
};
export default ChatMessage;
