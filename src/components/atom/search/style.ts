import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 5px var(--grey-4);

  .btn-search {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  & > input {
    flex-grow: 1;
    height: 24px;
    border: none;
    outline: none;

    &::placeholder {
      color: var(--grey-4);
    }
  }
`;
