import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px 20px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  background-color: var(--grey-2);
  border-radius: 10px;
`;

export const Progress = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 13px;
  background-color: var(--green-6);
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: 0;
    bottom: -3px;
    width: 1.5px;
    background-image: linear-gradient(var(--green-6) 33%, rgba(0, 0, 0, 0) 33%);
    background-size: 2px 4px;
    background-repeat: repeat-y;
  }
`;

export const ProgressLabel = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--green-6);
  margin-top: 8px;
`;

export const UserLevelWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 4.5px;
`;

export const ProgressBarHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  cursor: pointer;
`;
