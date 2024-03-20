import React from 'react';
import styled from 'styled-components';
interface ButtonProps {
  width?: string;
  color?: string;
  padding?: string;
  $bgcolor?: string;
  borderRadius?: string;
  fontSize?: string;
  children?: React.ReactNode;
  handleOnClick?: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ width }) => width || '100px'};
  padding: ${({ padding }) => padding || '10px'};
  background-color: ${({ $bgcolor }) => $bgcolor || 'var(--grey-2)'};
  color: ${({ color }) => color || 'var(--grey-5)'};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  cursor: pointer;
  transition: transform 0.1s ease;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  &:active {
    transform: scale(0.95);
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  color,
  $bgcolor,
  handleOnClick,
  borderRadius,
  fontSize,
  padding,
  disabled,
}) => {
  return (
    <ButtonContainer
      width={width}
      color={color}
      fontSize={fontSize}
      $bgcolor={$bgcolor}
      onClick={handleOnClick}
      borderRadius={borderRadius}
      padding={padding}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
