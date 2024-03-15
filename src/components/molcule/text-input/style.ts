import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
`;

export const StyledBoxInput = styled.input<{ readOnly?: boolean }>`
  display: flex;
  height: 51px;
  box-sizing: border-box;
  padding: 10px 17px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  flex-grow: 1;
  outline: none;
  font-size: 15px;

  background-color: ${({ readOnly }) => (readOnly ? 'var(--grey-2)' : 'white')};

  ::placeholder {
    color: var(--grey-4);
  }
`;
