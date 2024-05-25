import styled from 'styled-components';

export const Container = styled.div<{ $ismine: boolean }>`
  display: flex;
  flex-direction: ${({ $ismine }) => ($ismine ? 'row-reverse' : 'row')};
  align-items: flex-end;
`;

export const Bubble = styled.div<{ $ismine: boolean }>`
  padding: 10px 12px;
  border-radius: ${({ $ismine }) => ($ismine ? '18px 18px 0 18px' : '18px 18px 18px 0')};
  background-color: ${({ $ismine }) => ($ismine ? 'var(--green-primary)' : '#f6f6f6')};
  color: ${({ $ismine }) => ($ismine ? 'white' : 'var(--grey-7)')};
  margin-left: ${({ $ismine }) => ($ismine ? '0' : '10px')};
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

export const Profile = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

export const Timestamp = styled.span<{ $ismine: boolean }>`
  flex-shrink: 0;
  padding-left: ${({ $ismine }) => ($ismine ? '0' : '15px')};
  padding-right: ${({ $ismine }) => ($ismine ? '15px' : '0')};
  padding-bottom: 5px;
  font-size: 10px;
  color: var(--grey-4);
`;
