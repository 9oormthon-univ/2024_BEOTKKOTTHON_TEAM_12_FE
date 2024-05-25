// ChatInput.tsx
import React, { useState } from 'react';
import plusIcon from 'assets/icons/chat_add.svg';
import sendIcon from 'assets/icons/send.svg';
import * as S from './style';

interface ChatInputProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ handleImageChange, handleSend }) => {
  const [message, setMessage] = useState<string>(''); // 입력된 메시지 상태 추가

  return (
    <S.ChatInputContainer>
      <S.AddButton htmlFor="image-upload">
        <img src={plusIcon} alt="plus" />
        <S.HiddenInput
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </S.AddButton>
      <S.Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleSend(message);
            setMessage('');
          }
        }}
      />
      <S.SendButton
        onClick={() => {
          handleSend(message);
          setMessage('');
        }}
      >
        <img src={sendIcon} alt="send" />
      </S.SendButton>
    </S.ChatInputContainer>
  );
};

export default ChatInput;
