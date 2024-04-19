import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: 'Noto Sans KR';
`;

export const PasswordError = styled.div`
  margin-top: 5px;
  color: var(--red-primary);
  font-size: 12px;
  font-family: 'Noto Sans KR';
`;
