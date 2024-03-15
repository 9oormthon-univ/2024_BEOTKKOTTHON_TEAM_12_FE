import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  height: 24px;

  & > label {
    font-size: 14px;
  }

  & > input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 17px;
    height: 17px;
    margin-top: 0;
    margin-left: 0;
    margin-right: 7px;
    border: 2px solid var(--grey-4);
    box-sizing: border-box;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  & > input[type='radio']:checked {
    background-color: var(--green-6);
    border: 4px solid white;
    box-shadow: 0 0 0 1.6px var(--green-6);
  }
`;
