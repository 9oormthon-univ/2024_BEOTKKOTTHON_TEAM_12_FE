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

  & > input {
    margin-top: 0;
    margin-left: 0;
    margin-right: 7px;
  }

  & > label {
    font-size: 14px;
  }
`;
