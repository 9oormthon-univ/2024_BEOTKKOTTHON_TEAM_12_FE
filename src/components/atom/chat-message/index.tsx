import React from 'react';
import * as S from './style';
import defaultProfilePic from '@assets/images/profile-default-image.svg';
interface MessageProps {
  content: string;
  timestamp: string;
  isMine: boolean;
  profilePic?: string;
}
const ChatMessage: React.FC<MessageProps> = ({ content, timestamp, isMine, profilePic }) => {
  return (
    <S.MessageContainer isMine={isMine}>
      {!isMine && <S.Avatar src={profilePic ? profilePic : defaultProfilePic} alt="profile" />}
      <S.MessageBubble isMine={isMine}>{content}</S.MessageBubble>
      <S.Timestamp>{timestamp}</S.Timestamp>
    </S.MessageContainer>
  );
};
export default ChatMessage;
