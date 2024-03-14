import { ProfileCard, ProgressBar } from '@components/index';
import React from 'react';
import styled from 'styled-components';

export const UserSectionWrapper = styled.div`
  background-color: #fff;
  padding-top: 20px;
`;
const UserSection: React.FC = () => {
  const currentLevel = {
    level: '새싹',
    nextLevel: '목화',
    currentExp: 100,
    nextLevelExp: 200,
  };
  return (
    <UserSectionWrapper>
      <ProfileCard />
      <ProgressBar
        level={currentLevel.level}
        nextLevel={currentLevel.nextLevel}
        currentExp={currentLevel.currentExp}
        nextLevelExp={currentLevel.nextLevelExp}
      />
    </UserSectionWrapper>
  );
};

export default UserSection;
