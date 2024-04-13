import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--content-size) + var(--header-size));
  padding: 30px 20px 0;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;

  section img {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .carousel {
    border-radius: 10px;
    margin-top: 2px;
  }

  .carousel,
  .banner1,
  .quiz,
  .banner2 {
    margin-bottom: 12px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.01);
    }
  }
`;
