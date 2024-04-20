import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
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

    & > a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  & > input {
    flex-grow: 1;
    height: 24px;
    border: none;
    outline: none;
    background-color: white;

    &::placeholder {
      color: var(--grey-4);
    }

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;
