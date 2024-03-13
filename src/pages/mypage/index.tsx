import React from 'react';
import { ProfileCard } from '../../components/index';
import ProgressBar from '../../components/molcule/eco-progressbar';

const MyPage: React.FC = () => {
  const currentLevel = {
    level: '새싹',
    nextLevel: '목화',
    currentExp: 100,
    nextLevelExp: 200,
  };
  return (
    <div>
      <ProfileCard />
      <ProgressBar
        level={currentLevel.level}
        nextLevel={currentLevel.nextLevel}
        currentExp={currentLevel.currentExp}
        nextLevelExp={currentLevel.nextLevelExp}
      />
    </div>
  );
};

export default MyPage;
