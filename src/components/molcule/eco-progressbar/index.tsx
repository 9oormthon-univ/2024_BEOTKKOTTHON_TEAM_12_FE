import * as S from './style';
import helpIcon from 'assets/icons/help.svg';
import { levelUrlArr } from 'utils/levelUrlArr';
import { TextLabel } from 'components/index';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { MypageUserType } from 'types/userType';

const ProgressBar = () => {
  const cache = useQueryClient();
  const userData = cache.getQueryData(['user']) as MypageUserType;

  return (
    <S.Container>
      <S.ProgressBarHeader>
        <S.UserLevelWrapper>
          <TextLabel size={18} $weight={800} color="var(--green-6)">
            Lv. {userData.level}
          </TextLabel>
          <img src={levelUrlArr(userData.level)} width="11px" height="11.3px" alt="profile level" />
        </S.UserLevelWrapper>

        <Link to={'/mypage/level-info'}>
          <S.Image src={helpIcon} alt="help icon" />
        </Link>
      </S.ProgressBarHeader>

      <TextLabel size={12} $weight={300} color="var(--grey-5)">
        다음 {userData.next_level}레벨까지 {userData.remain_level_point}포인트 남았어요!
      </TextLabel>

      <S.ProgressBarContainer>
        <S.Progress width={`${100 - userData.remain_level_point}%`} />
      </S.ProgressBarContainer>

      <S.ProgressLabel>{`현재 ${userData.point} 포인트`}</S.ProgressLabel>
    </S.Container>
  );
};

export default ProgressBar;
