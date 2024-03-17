// ChatInput.tsx
import React, { useState } from 'react';
import plusIcon from '@assets/icons/chat_add.svg';
import sendIcon from '@assets/icons/send.svg';
import * as S from './style';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = (imageToSend: File | null) => {
    // 메시지가 없고 이미지도 없으면 전송하지 않음
    if (message.trim() === '' && !imageToSend) return;
    console.log(message);
    if (imageToSend) {
      console.log('이미지 전송:', imageToSend);
    }
    // 메시지 전송 후 입력창을 비우기
    setMessage('');
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      handleSend(file);
    }
  };

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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSend(null);
          }
        }}
      />
      <S.SendButton onClick={() => handleSend(null)}>
        <img src={sendIcon} alt="send" />
      </S.SendButton>
    </S.ChatInputContainer>
  );
};

export default ChatInput;
