import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  height: 19px;

  .active {
    background-color: var(--green-6);
  }
`;

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--grey-3);
`;
