import TextLabel from 'components/atom/text-label';
import * as S from './style';

const qnaList = [
  {
    title: '레벨은 어떻게 구성되어 있나요?',
    list: [
      'WEAR의 레벨은 씨앗부터 옷까지 5단계로 구성되어 있어요.',
      '각 단계는 5개 레벨로 구성되어 있어요.',
    ],
  },
  {
    title: '지급 기준은 무엇인가요?',
    list: [
      '판매 1회 당 10포인트 / 구매 1회 당 5포인트가 지급됩니다.',
      '기부 1회 당 15포인트가 지급됩니다.',
      '세 달 연속 월 3회 이상 거래 또는 기부 시 15포인트 추가 지급됩니다.',
      '하루에 한 번 매거진탭에서 퀴즈를 풀고 에코 포인트를 획득해 보세요!',
    ],
  },
  {
    title: '레벨과 에코 포인트는 어떻게 사용되나요?',
    list: [
      '나의 에코 포인트는 나의 학교 환경 점수에 반영됩니다.',
      '레벨이 높을수록 나의 판매 상품이 상위에 노출됩니다.',
      '레벨이 높을수록 환경 보호 이벤트 참여에 우선권이 주어집니다.',
    ],
  },
];

const BoxQna = () => {
  return (
    <S.Container>
      {qnaList.map((item, index) => (
        <S.QnaWrapper key={index}>
          <TextLabel className="title" color={'var(--grey-7)'} size={14} $weight={700}>
            ✅ {item.title}
          </TextLabel>

          {item.list.map((desc, index) => (
            <TextLabel
              key={index}
              className="desc"
              color="var(--grey-7)"
              size={11}
              $weight={400}
              $letterSpacing="-1px"
            >
              <S.Dot />
              {desc}
            </TextLabel>
          ))}
        </S.QnaWrapper>
      ))}
    </S.Container>
  );
};

export default BoxQna;
