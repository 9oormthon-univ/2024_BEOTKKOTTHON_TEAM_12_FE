import React from 'react';
import styled from 'styled-components';

interface TextLabelProps {
  text: string;
  size: number;
  weight?: number;
  color?: string;
}

const TextLabelWrapper = styled.div<{ size: number; weight?: number; color?: string }>`
  color: ${({ color }) => color || '#3C3C3C'};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight || 500};
`;

const TextLabel: React.FC<TextLabelProps> = ({ text, size, weight, color }) => {
  return (
    <TextLabelWrapper size={size} weight={weight} color={color}>
      {text}
    </TextLabelWrapper>
  );
};

export default TextLabel;
