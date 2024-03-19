import styled from 'styled-components';
import Slider from 'react-slick';

interface SizeProps {
  $dot?: string;
  $width: string;
  $height: string;
}

export const Container = styled.div<SizeProps>`
  box-sizing: border-box;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export const BoxSlider = styled(Slider)<SizeProps>`
  & img {
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    margin: 0 auto;
  }

  .slick-dots {
    bottom: ${(props) => props.$dot};
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
