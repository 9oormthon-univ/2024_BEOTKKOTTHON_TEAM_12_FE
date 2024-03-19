import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 10px 0;

  .active {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 1.3%);
      height: 105px;
      margin-left: 0.8%;
      border: 4px solid var(--green-6);
      border-radius: 10px;
      box-sizing: border-box;
      background-color: rgba(30, 182, 91, 0.2);
      z-index: 3;
    }
  }
`;

export const BoxImage = styled.div`
  width: 100%;
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.02);
  }

  & > img {
    position: relative;
    width: 100%;
    height: 105px;
  }
`;
