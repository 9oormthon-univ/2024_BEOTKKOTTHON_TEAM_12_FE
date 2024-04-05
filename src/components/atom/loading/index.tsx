import { PulseLoader } from 'react-spinners';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  background-color: white;

  position: absolute;
  left: 0;
  right: 0;
  padding: 30px;
  box-sizing: border-box;
`;

const Loading = () => {
  return (
    <Container>
      <PulseLoader color="var(--green-6)" />
    </Container>
  );
};

export default Loading;
