import defaultImg from '@assets/images/profile-default-image.svg';
import ImgEx1 from '@assets/images/product-default-img.png';
import ImgEx2 from '@assets/images/profile-no-image.png';
import ImgEx3 from '@assets/nav-icons/chatting_green.svg';

import { Product } from 'src/types/types';

// 카테고리, 최근 검색어
export const categories = ['전체', '상의', '하의', '아우터', '원피스', '가방', '잡화', '기타'];
export const searches = ['자라', 'H&M', '지오다노', '유니클로', '에잇세컨즈'];

// 상품 등록 폼 태그
export const priceList = ['+1,000원', '+3,000원', '+5,000원', '+10,000원'];
export const placeList = ['정문', '올레사거리', '후문', '혜화역'];

// 유저 정보
export const userProfile = {
  nickname: '김스옹',
  university: '성균관대학교 서울캠퍼스',
  profileImg: defaultImg,
  level: 1,
  style: ['캐주얼', '페미닌', '빈티지'],
};

// 판매 상품 데이터
export const salesData: Product[] = [
  {
    id: '1',
    name: '지오다노',
    time: '30분전',
    state: '보통이에요',
    price: 16500,
    category: '상의',
    recievedImgUrl: [ImgEx1, ImgEx2, ImgEx3],
    description:
      '아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ',
    place: '정문',
    sold: '판매중',
  },
  {
    id: '2',
    name: '유니클로',
    time: '30분전',
    state: '아주 좋아요',
    price: 16500,
    category: '하의',

    recievedImgUrl: [ImgEx3, ImgEx2, ImgEx1],
    description: '우우앙아우우',
    place: '후문',
    sold: '판매완료',
  },
  {
    id: '3',
    name: '싸게 팔아요',
    time: '30분전',
    state: '보통이에요',
    price: 16500,
    category: '아우터',
    recievedImgUrl: [ImgEx2, ImgEx1, ImgEx3],
    description: '이야아아아ㅏ앙',
    place: '도서관 앞',
    sold: '판매완료',
  },
  {
    id: '4',
    name: '가져가세요',
    time: '30분전',
    state: '보통이에요',
    price: 16500,
    category: '원피스',
    recievedImgUrl: [ImgEx1, ImgEx2, ImgEx3],
    description:
      '아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ',
    place: '정문',
    sold: '판매중',
  },
  {
    id: '5',
    name: 'H&M',
    time: '30분전',
    state: '보통이에요',
    price: 16500,
    category: '원피스',
    recievedImgUrl: [ImgEx1, ImgEx2, ImgEx3],
    description:
      '아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ아아아ㅏㅏ아ㅏ이으으아아으잉이으으으아아아앙아아ㅏㅏ아ㅏㅇ아ㅏ아아아ㅏ아아ㅡ으으응ㅇ아아아ㅏ',
    place: '정문',
    sold: '판매중',
  },
];
