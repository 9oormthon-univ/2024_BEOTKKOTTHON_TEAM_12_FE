// MessageStyles.ts
import styled from 'styled-components';

export const MessageContainer = styled.div<{ $ismine: boolean }>`
  display: flex;
  flex-direction: ${({ $ismine }) => ($ismine ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const MessageBubble = styled.div<{ $ismine: boolean }>`
  max-width: 75%;
  padding: 10px 12px;
  border-radius: ${({ $ismine }) => ($ismine ? '18px 18px 0 18px' : '18px 18px 18px 0')};
  background-color: ${({ $ismine }) => ($ismine ? 'var(--green-primary)' : '#f6f6f6')};
  color: ${({ $ismine }) => ($ismine ? 'white' : 'var(--grey-7)')};
  margin: ${({ $ismine }) => ($ismine ? '0' : '0 0 0 10px')};
  position: relative;
  font-size: 13px;
  white-space: pre-line;
  line-height: 1.5;
  & > img {
    max-width: 100%;
    max-height: 350px;
    border-radius: 10px;
    object-fit: contain;
  }
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
