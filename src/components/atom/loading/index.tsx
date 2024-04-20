import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

interface LoadingProps {
  $width?: string;
  $height?: string;
}

const Container = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width || 'inherit'};
  height: ${(props) => props.$height || 'inherit'};
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
`;

const Loading = ({ $height, $width }: LoadingProps) => {
  return (
    <Container $width={$width} $height={$height}>
      <PulseLoader color="var(--green-6)" />
    </Container>
  );
};

export default Loading;
