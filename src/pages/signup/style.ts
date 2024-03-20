import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Noto Sans KR';
`;

export const BtnLeft = styled.img`
  transform: rotate(180deg);
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 17px;
  margin-bottom: 13px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'var(--green-primary)' : 'var(--grey-3)')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  gap: 8px;
`;

export const LoginInput = styled.input`
  display: flex;
  height: 51px;
  padding: 10px 17px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  box-sizing: border-box;
  font-size: 16px;
  caret-color: var(--green-primary);

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: var(--grey-4);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--green-primary);
  }
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 33px;
  top: 63px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

/**
 * 비밀번호 확인 체크 리스트
 */
export const Checklist = styled.ul`
  display: flex;
  margin: -10px 0 10px 0;
  list-style: none;
`;

export const CheckItem = styled.li<{ valid: boolean }>`
  color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-6)')};
  font-size: 12px;
  font-weight: 700;
  &:before {
    content: '✓';
    color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-6)')};
    margin: 0 8px;
  }
`;

export const PasswordError = styled.div`
  margin-top: -5px;
  color: #ff3b3b;
  font-size: 12px;
  font-family: 'Noto Sans KR';
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
`;

export const ChecklistColumn = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 20px;
  border-top: 1px solid var(--grey-3);
  gap: 10px;
  list-style: none;
`;

export const CheckItemLarge = styled.li<{ valid: boolean }>`
  padding: 5px;
  color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-7)')};
  font-size: 14px;
  font-weight: 400;
  &:before {
    content: '✓';
    color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-7)')};
    margin: 0 8px;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AgreeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 20px;
`;

export const LoginText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--grey-6);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100svh - 60px);

  & > img {
    margin-bottom: 20px;
  }
`;
