import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(158, 158, 158, 0.5);
`;

export const BoxContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 295px;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  z-index: 5;

  .text {
    width: 295px;
    height: 96px;
    display: flex;
    gap: 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 8px;

  button {
    flex-grow: 1;
    height: 55px;
    font-size: 16px;
  }
`;
