import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 136px);
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    margin-top: 17px;
  }

  .carousel,
  .banner1,
  .quiz,
  .banner2 {
    margin-bottom: 12px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.03);
    }
  }
`;
