import * as S from './style';
import helpIcon from '@assets/icons/help.svg';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { TextLabel } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { useUserProfileInfo } from 'src/store/userData';

const ProgressBar = () => {
  const {
    level,
    next_level: nextLevel,
    point: currentExp,
    remain_level_point: remainLevelExp,
  } = useUserProfileInfo();
  const navigate = useNavigate();

  const onHelpClick = () => {
    navigate('/mypage/level-info');
  };

  return (
    <S.ProgressBarCard>
      <S.ProgressBarHeader>
        <S.UserLevelWrapper>
          <TextLabel text={`Lv.${level}`} size={20} $weight={800} color="var(--green-primary)" />
          <S.Image src={levelUrlArr(level)} alt="profile level" />
        </S.UserLevelWrapper>
        <S.Image src={helpIcon} alt="help icon" onClick={onHelpClick} />
      </S.ProgressBarHeader>

      <TextLabel
        text={`다음 ${nextLevel}레벨까지 ${remainLevelExp}포인트 남았어요!`}
        size={13}
        $weight={300}
        color="var(--grey-5)"
      />
      <S.ProgressBarContainer>
        {/* <S.Progress width={progressWidth} /> */}
        <S.Progress width={`${100 - remainLevelExp}%`} />
      </S.ProgressBarContainer>
      <S.ProgressLabel>{`현재 ${currentExp} 포인트`}</S.ProgressLabel>
    </S.ProgressBarCard>
  );
};

export default ProgressBar;
