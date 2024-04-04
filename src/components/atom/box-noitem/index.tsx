import React from 'react';
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

const BoxNoItem = () => {
  return <Container>내역이 없습니다.</Container>;
};

export default BoxNoItem;
