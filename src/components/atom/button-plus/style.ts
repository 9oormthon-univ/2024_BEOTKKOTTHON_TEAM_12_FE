import styled from 'styled-components';

interface ContainerProps {
  $bottom: string;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--green-6);
  cursor: pointer;

  position: absolute;
  right: 20px;
  bottom: ${(props) => props.$bottom};

  transition: transform 0.1s ease;
  &:active {
    transform: scale(0.95);
  }

  & > svg {
    width: 20px;
    height: 20px;
    color: var(--green-1);
  }
`;
