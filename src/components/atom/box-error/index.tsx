import { ReactNode } from 'react';
import styled from 'styled-components';

interface BoxErrorProps {
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
  width: 100%;
  height: ${(props) => props.$height || 'inherit'};
  font-size: 16px;
  color: var(--grey-5);
`;

const BoxError = ({ $height, children }: BoxErrorProps) => {
  return <Container $height={$height}>{children}</Container>;
};

export default BoxError;
