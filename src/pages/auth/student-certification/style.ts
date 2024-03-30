import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;

  font-family: 'Noto Sans KR';
`;

export const Logo = styled.img`
  width: 148px;
  margin-top: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  font-size: 16px;
  color: var(--grey-6);
  text-decoration: underline;
  font-family: 'Noto Sans KR';
  cursor: pointer;

  transform: scale(1);
  &:active {
    transform: scale(0.98);
  }
`;
