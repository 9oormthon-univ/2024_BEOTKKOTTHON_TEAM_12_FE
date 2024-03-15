import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
`;

export const StyledBoxInput = styled.div<{ readonly?: boolean }>`
  display: flex;
  height: 51px;
  box-sizing: border-box;
  padding: 10px 17px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  input {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 15px;
    background-color: ${({ readOnly }) => (readOnly ? 'var(--grey-2)' : 'white')};
  }

  ::placeholder {
    color: var(--grey-4);
  }

  /* readOnly가 true일 때 스타일 */
  background-color: ${({ readOnly }) => (readOnly ? 'var(--grey-2)' : 'white')};
`;
