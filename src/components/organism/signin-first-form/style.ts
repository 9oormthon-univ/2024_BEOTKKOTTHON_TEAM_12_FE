import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: 'Noto Sans KR';
`;

export const Checklist = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 7px;
  list-style: none;
`;

export const CheckItem = styled.li<{ valid: boolean }>`
  color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-6)')};
  font-size: 12px;
  font-weight: 700;
  &:before {
    content: '✓ ';
    color: ${(props) => (props.valid ? 'var(--green-primary)' : 'var(--grey-6)')};
  }
`;
export const PasswordError = styled.div`
  margin-top: 5px;
  color: var(--red-primary);
  font-size: 12px;
  font-family: 'Noto Sans KR';
`;
