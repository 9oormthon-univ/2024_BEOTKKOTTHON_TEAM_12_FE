import React from 'react';
import styled from 'styled-components';

interface ProfileButtonProps {
  text: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const ButtonWrapper = styled.button<ProfileButtonProps>`
  width: fit-content;
  padding: 3px 8px;
  border-radius: 20px;
  border: 1px solid ${({ borderColor }) => borderColor || '#e2e2e2'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fbfbfb'};
  color: ${({ color }) => color || '#3C3C3C'};
`;

const ProfileButton: React.FC<ProfileButtonProps> = ({
  text,
  color,
  borderColor,
  backgroundColor,
}) => {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} color={color} borderColor={borderColor}>
      {text}
    </ButtonWrapper>
  );
};

export default ProfileButton;
