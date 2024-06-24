import clothes from 'assets/onboarding/clothes.svg';
import donation from 'assets/onboarding/donation.svg';
import earth from 'assets/onboarding/earth.svg';
import tag from 'assets/onboarding/tag.svg';

// 기부 절차
export const DONATION_HEADER = [
  '기부할 단체를 선택해주세요',
  '기부 시 주의사항을 확인해주세요',
  '기본 정보 입력',
  '물품 기부 신청하기',
];

// 회원가입 절차
export const SIGNUP_HEADER = ['회원가입', '재학생 인증', '스타일 태그 선택', '약관에 동의해주세요'];

// 리프레시 토큰 시간
export const JWT_EXPIRRY_TIME = 1.3 * 60000;

// 유저 id
export const USER_ID = 2;

// 카테고리
export const CATEGORIES = ['전체', '상의', '하의', '아우터', '원피스', '가방', '잡화', '기타'];

// 상품 등록 폼 태그
export const PRICE_LIST = ['+1,000원', '+3,000원', '+5,000원', '+10,000원'];
export const PLACE_LIST = ['정문', '올레사거리', '후문', '혜화역'];

// 로그인 페이지
export const LOGIN_DATA = {
  user_created_id: 'wearid2',
  user_password: 'wearpassword2',
};

// 퀴즈
export const QUIZ_DATA = [
  {
    title_num: 1,
    point: 1,
    question:
      "'제2의'라는 뜻의 'second'와 소비자 'consumer'의 합성어이면서, 지속가능한 삶을 위해 대안을 찾아 즐기는 소비자를 뜻하는 용어는?",
    list: ['블랙컨슈머', '시컨슈머', '세컨슈머', '마그네슘', '콘슈머'],
    answer: 3,
  },
  {
    title_num: 2,
    point: 1,
    question:
      '환경을 위협하는 쓰레기를 배출하지 않고 책임감 있는 생간, 소비 등 다양한 방법을 통해 자원을 보존하는 것을 일컫는 용어는?',
    list: ['세컨슈머', '콘슈머', '제로 웨이스트', '시컨슈머', '마그네슘'],
    answer: 3,
  },
];

// 온보딩 데이터
export const ONBOARDING_DATA = [
  {
    img_url: clothes,
    num: 1,
    title: '옷장에서 잠자고 있는 옷들을 깨워주세요.',
    description: ['WEAR가 공간만 차지하는 더 이상 입지 않는', '옷들의 새로운 주인을 찾아드립니다!'],
  },
  {
    img_url: earth,
    num: 2,
    title: '당신의 소중한 나눔이 WEAR에서 시작됩니다.',
    description: ['의류 기부를 통해 사랑이 필요한 분들과', '지구에게 따뜻함을 선물해 보세요.'],
  },
  {
    img_url: donation,
    num: 3,
    title: 'WEAR와 함께 환경보호도, 기부도 재밌게!',
    description: [
      '중고 거래와 기부를 하면 쌓이는 환경 점수!',
      '대학별 환경 점수 순위도 확인해보세요.',
    ],
  },
  {
    img_url: tag,
    num: 4,
    title: '나의 패션 취향을 알아주는 WEAR',
    description: [
      '나의 스타일 태그를 등록하고 패션 취향이',
      '비슷한 사용자의 상품을 먼저 확인해보세요.',
    ],
  },
];

export const STYLE_TAGS = [
  '심플베이직',
  '캐주얼',
  '모던시크',
  '러블리',
  '로맨틱',
  '유니크',
  '빈티지',
  '페미닌',
  '오피스룩',
  '캠퍼스룩',
  '스트릿',
  '섹시글램',
  '아메카지',
];
