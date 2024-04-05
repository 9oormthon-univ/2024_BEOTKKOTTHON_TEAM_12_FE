import styled from 'styled-components';

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

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 25px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
