import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  $height?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.$height || 'inherit'};
  font-size: 16px;
  color: var(--grey-5);
`;

interface BoxNoItemProps {
  $height?: string;
  children: ReactNode;
}

const BoxNoItem = ({ $height, children }: BoxNoItemProps) => {
  return <Container $height={$height}>{children}</Container>;
};

export default BoxNoItem;
