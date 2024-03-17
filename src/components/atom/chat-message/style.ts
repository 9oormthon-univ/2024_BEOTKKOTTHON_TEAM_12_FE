// MessageStyles.ts
import styled from 'styled-components';

export const MessageContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const MessageBubble = styled.div<{ isMine: boolean }>`
  max-width: 75%;
  padding: 10px 12px;
  border-radius: ${({ isMine }) => (isMine ? '18px 18px 0 18px' : '18px 18px 18px 0')};
  background-color: ${({ isMine }) => (isMine ? 'var(--green-primary)' : '#f6f6f6')};
  color: ${({ isMine }) => (isMine ? 'white' : 'var(--grey-7)')};
  margin: ${({ isMine }) => (isMine ? '0' : '0 0 0 10px')};
  position: relative;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

export const Timestamp = styled.span`
  padding: 0 15px 5px 15px;
  font-size: 10px;
  color: var(--grey-4);
`;
