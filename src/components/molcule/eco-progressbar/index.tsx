import React from 'react';
import * as S from './style';
import helpIcon from '../../../assets/icons/help.svg';
import profileIconLevel1 from '../../../assets/icons/profile-icon-level1.svg';
import { TextLabel } from '../..';

interface ProgressBarProps {
  level: string;
  nextLevel: string;
  currentExp: number;
  nextLevelExp: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  level,
  nextLevel,
  currentExp,
  nextLevelExp,
}) => {
  const progressWidth = (currentExp / nextLevelExp) * 100 + '%';

  const onHelpClick = () => {
    console.log('도움말');
  };
  return (
    <S.ProgressBarCard>
      <S.ProgressBarHeader>
        <S.UserLevelWrapper>
          <TextLabel text={`Lv.${level}`} size={20} weight={800} color="var(--green-primary)" />
          <S.Image src={profileIconLevel1} alt="profile level" />
        </S.UserLevelWrapper>
        <S.Image src={helpIcon} alt="help icon" onClick={onHelpClick} />
      </S.ProgressBarHeader>

      <TextLabel
        text={`다음 ${nextLevel}레벨까지 ${nextLevelExp - currentExp}포인트 남았어요!`}
        size={13}
        weight={300}
        color="var(--grey-5)"
      />
      <S.ProgressBarContainer>
        <S.Progress width={progressWidth} />
      </S.ProgressBarContainer>
      <S.ProgressLabel>{`현재 ${currentExp} 포인트`}</S.ProgressLabel>
    </S.ProgressBarCard>
  );
};

export default ProgressBar;
