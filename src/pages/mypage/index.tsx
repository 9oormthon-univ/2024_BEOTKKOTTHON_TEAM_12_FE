import React from 'react';
import * as S from './style';
import { MenuItem, ProfileCard } from '../../components/index';
import ProgressBar from '../../components/molcule/eco-progressbar';

const MyPage: React.FC = () => {
  const currentLevel = {
    level: '새싹',
    nextLevel: '목화',
    currentExp: 100,
    nextLevelExp: 200,
  };
  return (
    <S.MenuItemWrapper>
      <ProfileCard />
      <ProgressBar
        level={currentLevel.level}
        nextLevel={currentLevel.nextLevel}
        currentExp={currentLevel.currentExp}
        nextLevelExp={currentLevel.nextLevelExp}
      />
      <MenuItem />
    </S.MenuItemWrapper>
  );
};

export default MyPage;
