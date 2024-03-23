import styled from 'styled-components';

export const Container = styled.div`
  & > label {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid var(--grey-3);
    border-radius: 8px;
  }

  & > input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
  }
`;
