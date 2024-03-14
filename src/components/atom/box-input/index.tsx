import styled from 'styled-components';

const BoxInput = styled.div`
  display: flex;
  height: 51px;
  box-sizing: border-box;
  padding: 10px 17px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);

  & > input {
    flex-grow: 1;
    border: none;
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: var(--grey-4);
    }
  }
`;

export default BoxInput;
