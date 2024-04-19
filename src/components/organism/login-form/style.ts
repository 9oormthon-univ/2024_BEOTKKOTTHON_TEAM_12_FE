import styled from 'styled-components';

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 90px;
  gap: 7px;
  font-family: 'Noto Sans KR';
`;

export const LoginInput = styled.input`
  display: flex;
  width: 335px;
  height: 51px;
  padding: 16px 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  box-sizing: border-box;
  font-size: 16px;
  caret-color: var(--green-primary);

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-4);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--green-primary);
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  max-width: 335px;
  margin-bottom: 60px;
  gap: 7px;
`;
