import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--content-size);
  padding: 0 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;

  section img {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .carousel {
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

  @media screen and (min-width: 500px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 499px) {
    padding: 0 20px;
  }
`;
