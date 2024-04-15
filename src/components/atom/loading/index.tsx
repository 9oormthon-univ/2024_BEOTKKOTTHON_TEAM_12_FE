import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

interface LoadingProps {
  $height?: string;
}

const Container = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: ${(props) => props.$height || 'inherit'};
  background-color: white;
  padding: 30px;
  box-sizing: border-box;
`;

const Loading = ({ $height }: LoadingProps) => {
  return (
    <Container $height={$height}>
      <PulseLoader color="var(--green-6)" />
    </Container>
  );
};

export default Loading;
