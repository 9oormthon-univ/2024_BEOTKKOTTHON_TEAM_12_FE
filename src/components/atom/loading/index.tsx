import React from 'react';
import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  background-color: white;
`;

const Loading = () => {
  return (
    <Container>
      <PulseLoader color="var(--green-6)" />
    </Container>
  );
};

export default Loading;
