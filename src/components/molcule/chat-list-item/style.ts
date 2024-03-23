import styled from 'styled-components';

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-bottom: 1px solid var(--grey-2);
  cursor: pointer;
`;

export const ChatImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const ChatRightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  gap: 6px;
`;

export const SenderName = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
`;

export const LastMessage = styled.div`
  color: var(--grey-7);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 텍스트 처리
  max-width: 200px;
`;

export const Timestamp = styled.div`
  position: absolute;
  top: -15px;
  right: 0;
  color: #999;
  font-size: 12px;
  width: 30px;

  svg {
    margin-right: 5px;
  }
`;

export const UnreadCount = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--green-primary);
  color: white;
  font-size: 12px;
  padding: 5px;
  box-sizing: border-box;
  font-weight: bold;
`;
