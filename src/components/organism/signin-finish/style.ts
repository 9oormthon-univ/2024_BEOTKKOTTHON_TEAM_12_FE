import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100svh - var(--nav-size));
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;
