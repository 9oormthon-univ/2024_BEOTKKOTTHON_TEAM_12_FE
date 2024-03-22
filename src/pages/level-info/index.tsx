import x from '@assets/icons/x.svg';
import * as S from './style';
import { Header, TextLabel } from '@components/index';
import { useNavigate } from 'react-router-dom';
import ecoLeaf from '@assets/icons/eco_leaf.svg';
import levelBar from '@assets/images/level-bar.svg';
import levelProcess from '@assets/images/level-process.svg';
const LevelInfo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <img src={x} className="right" alt="btn-back" onClick={() => navigate('/mypage')} />
      </Header>
      <S.Container>
        <S.SystemHeader>
          <S.FlexWrapper>
            <TextLabel
              text="레벨 및 에코 포인트 시스템 안내"
              color="white"
              size={20}
              $weight={700}
            />
            <img src={ecoLeaf} alt="eco-leave" />
          </S.FlexWrapper>
          <TextLabel
            text="에코 포인트는 지구를 위한 여러분의 노력을 측정하는 
WEAR의 환경 지표입니다."
            color={'var(--green-3)'}
            size={12}
            $weight={400}
          />
        </S.SystemHeader>
        <S.LevelWrapper>
          <TextLabel text="레벨 구성" color={'var(--grey-7)'} size={14} $weight={700} />
          <TextLabel
            text="각 단계는 5개의 레벨로 구성되며, 20포인트 간격으로 레벨업할 수 있습니다."
            color={'var(--grey-7)'}
            size={11}
            $weight={400}
          />
          <img style={{ width: '60%' }} src={levelBar} alt="level-bar" />
        </S.LevelWrapper>
        <S.LevelWrapper>
          <TextLabel text="단계도" color={'var(--grey-7)'} size={14} $weight={700} />
          <img src={levelProcess} alt="level-process" />
        </S.LevelWrapper>

        <S.Divider></S.Divider>

        <S.QnaWrapper>
          <TextLabel
            text="✅ 레벨은 어떻게 구성되어 있나요?"
            color={'var(--grey-7)'}
            size={14}
            $weight={700}
          />
          <TextLabel
            text="• WEAR의 레벨은 씨앗부터 옷까지 5단계로 구성되어 있어요."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 각 단계는 5개 레벨로 구성되어 있어요."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
        </S.QnaWrapper>
        <S.QnaWrapper>
          <TextLabel
            text="✅ 지급 기준은 무엇인가요?"
            color={'var(--grey-7)'}
            size={14}
            $weight={700}
          />
          <TextLabel
            text="• 판매 1회 당 10포인트 / 구매 1회 당 5포인트가 지급됩니다."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 기부 1회 당 15포인트가 지급됩니다."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 세 달 연속 월 3회 이상 거래 또는 기부 시 15포인트 추가 지급됩니다."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 하루에 한 번 매거진탭에서 퀴즈를 풀고 에코 포인트를 획득해 보세요!"
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
        </S.QnaWrapper>
        <S.QnaWrapper>
          <TextLabel
            text="✅ 레벨과 에코 포인트는 어떻게 사용되나요?"
            color={'var(--grey-7)'}
            size={14}
            $weight={700}
          />
          <TextLabel
            text="• 나의 에코 포인트는 나의 학교 환경 점수에 반영됩니다."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 레벨이 높을수록 나의 판매 상품이 상위에 노출됩니다."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
          <TextLabel
            text="• 레벨이 높을수록 환경 보호 이벤트 참여에 우선권이 주어집니다.."
            color="var(--grey-7)"
            size={11}
            $weight={400}
          />
        </S.QnaWrapper>
      </S.Container>
    </>
  );
};

export default LevelInfo;
