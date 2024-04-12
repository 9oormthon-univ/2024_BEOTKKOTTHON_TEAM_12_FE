import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  font-size: 16px;
  color: var(--grey-5);
`;

interface BoxNoItemProps {
  children: ReactNode;
}

const BoxNoItem = ({ children }: BoxNoItemProps) => {
  return <Container>{children}</Container>;
};

export default BoxNoItem;
