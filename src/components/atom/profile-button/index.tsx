import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: fit-content;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-1);
  font-size: 13px;
  color: var(--grey-6);
`;

interface ProfileButtonProps {
  children: React.ReactNode;
}

const ProfileButton = ({ children }: ProfileButtonProps) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default ProfileButton;
