import { ProfileCard, ProgressBar } from '@components/index';
import React from 'react';
import styled from 'styled-components';

export const UserSectionWrapper = styled.div`
  background-color: #fff;
  padding-top: 20px;
`;
const UserSection: React.FC = () => {
  return (
    <UserSectionWrapper>
      <ProfileCard />
      <ProgressBar />
    </UserSectionWrapper>
  );
};

export default UserSection;
