import { Product } from 'types/types';

import clothes from 'assets/onboarding/clothes.svg';
import donation from 'assets/onboarding/donation.svg';
import earth from 'assets/onboarding/earth.svg';
import tag from 'assets/onboarding/tag.svg';

// 유저 id
export const userId = 2;

// 카테고리, 최근 검색어
export const categories = ['전체', '상의', '하의', '아우터', '원피스', '가방', '잡화', '기타'];
export const searches = ['자라', 'H&M', '지오다노', '유니클로', '에잇세컨즈'];

// 상품 등록 폼 태그
export const priceList = ['+1,000원', '+3,000원', '+5,000원', '+10,000원'];
export const placeList = ['정문', '올레사거리', '후문', '혜화역'];

// 판매 상품 데이터
export const salesData: Product[] = [
  {
    id: 1,
    product_name: 'Virola',
    price: 1,
    product_image: ['http://dummyimage.com/150x100.png/5fa2dd/ffffff'],
    product_content:
      'ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
    is_private: true,
    category: 'eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit',
    wish: '22.220.182.165',
    count: '161.136.72.219',
  },
  {
    id: 2,
    product_name: 'Oregon Whitetop Aster',
    price: 2,
    product_image: ['http://dummyimage.com/193x100.png/dddddd/000000'],
    product_content: 'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at',
    is_private: true,
    category: 'massa tempor convallis nulla neque libero convallis eget eleifend luctus',
    wish: '86.136.172.124',
    count: '248.182.67.91',
  },
  {
    id: 3,
    product_name: 'Blue Dwarf Fleabane',
    price: 3,
    product_image: ['http://dummyimage.com/161x100.png/ff4444/ffffff'],
    product_content: 'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in',
    is_private: true,
    category:
      'nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis',
    wish: '139.228.172.112',
    count: '100.20.184.244',
  },
  {
    id: 4,
    product_name: 'Lepianthes',
    price: 4,
    product_image: ['http://dummyimage.com/111x100.png/ff4444/ffffff'],
    product_content:
      'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'erat id mauris vulputate elementum nullam varius nulla facilisi cras non',
    is_private: false,
    category:
      'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis',
    wish: '63.219.230.216',
    count: '24.44.87.186',
  },
  {
    id: 5,
    product_name: 'Madagascar Dropseed',
    price: 5,
    product_image: ['http://dummyimage.com/134x100.png/5fa2dd/ffffff'],
    product_content: 'id luctus nec molestie sed justo pellentesque viverra pede ac diam cras',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue',
    is_private: false,
    category: 'massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
    wish: '215.15.182.96',
    count: '245.24.50.53',
  },
  {
    id: 6,
    product_name: 'Hillside Crowngrass',
    price: 6,
    product_image: ['http://dummyimage.com/101x100.png/5fa2dd/ffffff'],
    product_content: 'rutrum nulla nunc purus phasellus in felis donec semper sapien',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'diam erat fermentum justo nec condimentum neque sapien placerat ante',
    is_private: true,
    category:
      'montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes',
    wish: '214.147.198.233',
    count: '69.45.125.191',
  },
  {
    id: 7,
    product_name: 'Western Mojave Buckwheat',
    price: 7,
    product_image: ['http://dummyimage.com/177x100.png/dddddd/000000'],
    product_content:
      'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci',
    is_private: false,
    category: 'lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna',
    wish: '52.209.218.116',
    count: '62.202.147.8',
  },
  {
    id: 8,
    product_name: 'Catnip',
    price: 8,
    product_image: ['http://dummyimage.com/201x100.png/5fa2dd/ffffff'],
    product_content:
      'suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place: 'ultrices posuere cubilia curae nulla dapibus dolor vel est donec',
    is_private: true,
    category: 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus',
    wish: '193.148.54.13',
    count: '144.16.105.89',
  },
  {
    id: 9,
    product_name: 'Purple Locoweed',
    price: 9,
    product_image: ['http://dummyimage.com/194x100.png/5fa2dd/ffffff'],
    product_content:
      'tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie',
    is_private: true,
    category:
      'enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis',
    wish: '211.216.173.191',
    count: '108.42.238.80',
  },
  {
    id: 10,
    product_name: 'Showy Phlox',
    price: 10,
    product_image: ['http://dummyimage.com/162x100.png/cc0000/ffffff'],
    product_content:
      'mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non',
    is_private: false,
    category:
      'ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris',
    wish: '14.177.146.167',
    count: '1.129.208.146',
  },
  {
    id: 11,
    product_name: "Lakela's Pinweed",
    price: 11,
    product_image: ['http://dummyimage.com/210x100.png/dddddd/000000'],
    product_content:
      'augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices',
    is_private: true,
    category: 'feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce',
    wish: '205.200.48.166',
    count: '186.180.87.13',
  },
  {
    id: 12,
    product_name: 'Wand Holdback',
    price: 12,
    product_image: ['http://dummyimage.com/232x100.png/dddddd/000000'],
    product_content:
      'massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi',
    product_status: '아주 좋아요',
    post_status: '판매중',
    place:
      'enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor',
    is_private: false,
    category:
      'turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis',
    wish: '103.188.111.73',
    count: '166.98.174.81',
  },
];

// 퀴즈
export const quizData = [
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
export const onboardingData = [
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

export const styleTags = [
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
