// styled.js
import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 20px 10px;
  margin: 0 auto;
  background: #ffffff;
  color: var(--grey-7);
  border-bottom: 1px solid var(--grey-3);
`;

export const LeftContainer = styled.div`
  margin-right: 12px;
`;

export const UpButton = styled.button`
  padding: 8px 10px;
  background-color: var(--grey-2);
  border-radius: 12px;
  color: var(--grey-5);
  font-size: 14px;
  cursor: pointer;

  transition: transform 0.1s ease;
  &:active {
    transform: scale(0.95);
  }
`;

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const MiddleContainer = styled.div`
  flex: 1;
`;

export const UpContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const DownContainer = styled.div`
  font-size: 14px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NotificationCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #4caf50;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 4px;
`;

export const TimeStamp = styled.div`
  font-size: 12px;
  color: #999999;
`;
