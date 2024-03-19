import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100svh;
  padding: 20px;
  font-family: 'Noto Sans KR';
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
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

export const PasswordInputWrapper = styled.div`
  position: relative;
`;

export const Divider = styled.span`
  color: var(--grey-4);
  margin: 0 8px;
`;

export const Link = styled.span`
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey-5);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 15px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 60px;
  gap: 7px;
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
