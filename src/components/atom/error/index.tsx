import { ReactNode } from 'react';
import styled from 'styled-components';

interface LoadingProps {
  $height?: string;
  children: ReactNode;
}

interface ContainerProps {
  $height?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: ${(props) => props.$height || 'inherit'};
  background-color: white;

  position: absolute;
  left: 0;
  right: 0;
  padding: 30px;
  box-sizing: border-box;
`;

const Error = ({ $height, children }: LoadingProps) => {
  return <Container $height={$height}>{children}</Container>;
};

export default Error;
