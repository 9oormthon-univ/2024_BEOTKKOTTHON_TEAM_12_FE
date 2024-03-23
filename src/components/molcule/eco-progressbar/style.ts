import styled from 'styled-components';

export const ProgressBarCard = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
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
  background-color: var(--green-primary);
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
    background-image: linear-gradient(var(--green-primary) 33%, rgba(0, 0, 0, 0) 33%);
    background-size: 2px 4px;
    background-repeat: repeat-y;
  }
`;

export const ProgressLabel = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: var(--green-primary);
  margin-top: 8px;
`;

export const UserLevelWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

export const ProgressBarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  cursor: pointer;
`;
