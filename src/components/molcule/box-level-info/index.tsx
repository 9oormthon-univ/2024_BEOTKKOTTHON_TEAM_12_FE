import * as S from './style';
import TextLabel from 'components/atom/text-label';
import levelBar from 'assets/images/level-bar.svg';
import levelProcess from 'assets/images/level-process.svg';

const BoxLevelInfo = () => {
  return (
    <S.Container>
      <S.Level>
        <TextLabel color={'var(--grey-7)'} size={14} $weight={700}>
          레벨 구성
        </TextLabel>
        <TextLabel color={'var(--grey-7)'} size={11} $weight={400} $letterSpacing="-1px">
          각 단계는 5개의 레벨로 구성되며, 20포인트 간격으로 레벨업할 수 있습니다.
        </TextLabel>
        <img className="img-level-info" src={levelBar} alt="level-bar" />
      </S.Level>

      <S.Step>
        <TextLabel className="title" color={'var(--grey-7)'} size={14} $weight={700}>
          단계도
        </TextLabel>
        <img src={levelProcess} alt="level-process" />
      </S.Step>
    </S.Container>
  );
};

export default BoxLevelInfo;
