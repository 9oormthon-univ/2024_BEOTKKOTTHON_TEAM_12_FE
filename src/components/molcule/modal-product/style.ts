import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;

  // 전체 레이아웃 크기 변경시 수정 필수
  width: 100%;
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
