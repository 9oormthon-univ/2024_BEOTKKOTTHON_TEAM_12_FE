import React from 'react';
import * as S from './style';
import defaultProfilePic from 'assets/images/profile-default-image.svg';
interface MessageProps {
  content: string | File;
  timestamp?: string;
  isMine: boolean;
  profilePic?: string;
}
const ChatMessage: React.FC<MessageProps> = ({ content, timestamp, isMine, profilePic }) => {
  // 파일을 위한 URL 생성 함수
  const renderContent = (content: string | File) => {
    if (typeof content === 'string') {
      return content;
    } else {
      // File 객체를 위한 URL 생성
      const fileUrl = URL.createObjectURL(content);
      // 이미지로 표시
      return <img src={fileUrl} alt="user-content" />;
    }
  };
  console.log(isMine, profilePic, defaultProfilePic);
  return (
    <S.MessageContainer isMine={isMine}>
      {!isMine && <S.Avatar src={profilePic ? profilePic : defaultProfilePic} alt="profile" />}
      <S.MessageBubble isMine={isMine}>{renderContent(content)}</S.MessageBubble>
      <S.Timestamp>{timestamp}</S.Timestamp>
    </S.MessageContainer>
  );
};
export default ChatMessage;
