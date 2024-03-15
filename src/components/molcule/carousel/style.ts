import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 314px;
`;

export const BoxSlider = styled(Slider)`
  & img {
    width: 375px;
    height: 314px;
  }

  .slick-dots {
    bottom: 13px;
    li {
      margin: 0;
    }
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: var(--grey-4);
    opacity: 0.8;
  }

  .slick-dots li.slick-active button:before {
    color: var(--green-6);
  }
`;
