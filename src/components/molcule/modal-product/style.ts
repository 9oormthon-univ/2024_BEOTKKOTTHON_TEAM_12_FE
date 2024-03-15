import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .back {
    z-index: 5;
    width: 100%;
    height: 100vh;
    background-color: var(--grey-5);
    opacity: 0.7;
  }
`;

export const BoxContent = styled.div`
  position: fixed;
  width: 295px;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  z-index: 5;

  .text {
    width: 295px;
    height: 96px;
    display: grid;
    place-items: center;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 8px;

  button {
    height: 55px;
    font-size: 16px;
  }
`;
