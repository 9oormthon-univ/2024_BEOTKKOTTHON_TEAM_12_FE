import { ReactNode } from 'react';
import styled from 'styled-components';

export interface BoxInputProps {
  children?: ReactNode;
  $width?: string;
  [key: string]: any;
}

export interface ContainerProps {
  $width?: string;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.$width || 'auto'};
  display: flex;
  align-items: center;
  height: 51px;
  box-sizing: border-box;
  padding: 10px 17px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);

  .sub-placeholder {
    font-size: 16px;
    color: var(--grey-5);
  }
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-right: 4px;

  &::placeholder {
    color: var(--grey-4);
  }
`;

const BoxInput = ({ children, $width, ...props }: BoxInputProps) => {
  return (
    <Container $width={$width}>
      <Input {...props} />
      {children}
    </Container>
  );
};

export default BoxInput;
