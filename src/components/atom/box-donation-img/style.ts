import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;

  gap: 13px;
  background-color: white;

  .otcan {
    background-color: #64bad2;
    opacity: 0.9;
  }

  .active {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 105px;
      border: 3px solid var(--green-6);
      border-radius: 10px;
      background-color: rgba(30, 182, 91, 0.2);
      transform: translate(-3px, -3px);
      z-index: 3;
    }
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--grey-3);
  border-radius: 10px;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
  }

  & > img {
    position: relative;
    width: 260px;
    height: 105px;
  }
`;
