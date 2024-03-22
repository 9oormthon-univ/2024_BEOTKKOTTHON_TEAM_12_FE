import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 50px 20px;
  font-family: 'Noto Sans KR';
`;

export const SystemHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 14px 20px;
  gap: 5px;
  background-color: var(--green-primary);
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const LevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
  padding: 10px 20px 0 20px;
`;

export const Divider = styled.div`
  height: 14px;
  margin-top: 45px;
  background-color: var(--grey-2);
`;

export const QnaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
  padding: 10px 20px 0 20px;
`;
