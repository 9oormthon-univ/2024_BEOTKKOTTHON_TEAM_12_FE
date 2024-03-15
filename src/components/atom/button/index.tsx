import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  width?: string;
  color?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadious?: string;
  handleOnClick?: () => void;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '100px'};
  padding: ${({ padding }) => padding || '10px'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--grey-2)'};
  color: ${({ color }) => color || 'var(--grey-5)'};
  border: none;
  border-radius: ${({ borderRadious }) => borderRadious || '5px'};
  cursor: pointer;

  transition: transform 0.1s ease;

  &:active {
    transform: scale(0.95);
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  color,
  backgroundColor,
  handleOnClick,
  borderRadious,
  padding,
}) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      onClick={handleOnClick}
      borderRadious={borderRadious}
      padding={padding}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
