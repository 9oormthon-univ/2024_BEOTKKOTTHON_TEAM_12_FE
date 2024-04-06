// 주된 테스트 데이터
const productData = {
  id: 1,
  price: 10000,
  product_name: '니트조끼 팔아요',
  product_status: '아주 좋아요',
  post_status: 'onSale',
  product_image: [
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/52b00b6a51e8e97ba85b541c4bf0d846.jpg',
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/9bb8045cf322b3c1c9deb362a9b45bb6.jpg',
  ],
  is_selected: true,
  time: '6시간 전',

  product_content: '한 번밖에 안 입었어요',
  place: '후문',
  created_time: '2024/04/04 15:03',
  seller: {
    id: 1,
    nick_name: '미정',
    profile_image: [
      'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/9bb8045cf322b3c1c9deb362a9b45bb6.jpg',
    ],
    level: '새싹',
  },
};

// 리스트를 위한 데이터
const productData2 = {
  id: 2,
  price: 20000,
  product_name: '팔아요',
  product_status: '보통이에요',
  post_status: 'soldOut',
  product_image: [
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/9bb8045cf322b3c1c9deb362a9b45bb6.jpg',
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/52b00b6a51e8e97ba85b541c4bf0d846.jpg',
  ],
  is_selected: true,
  time: '3시간 전',

  product_content: '한 번밖에 안 입었어요',
  place: '후문',
  created_time: '2024/04/04 15:03',
  seller: {
    id: 1,
    nick_name: '미정',
    profile_image: [
      'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/9bb8045cf322b3c1c9deb362a9b45bb6.jpg',
    ],
    level: '새싹',
  },
};

// 메인 페이지 상품 리스트 데이터
export const productMainDummyData = () => {
  return [
    {
      id: productData.id,
      price: productData.price,
      product_name: productData.product_name,
      product_status: productData.product_status,
      post_status: productData.post_status,
      product_image: productData.product_image,
      is_selected: productData.is_selected,
      time: productData.time,
    },
    {
      id: productData2.id,
      price: productData2.price,
      product_name: productData2.product_name,
      product_status: productData2.product_status,
      post_status: productData2.post_status,
      product_image: productData2.product_image,
      is_selected: productData2.is_selected,
      time: productData2.time,
    },
  ];
};

// 상품 상세 페이지 데이터
export const productDetailDummyData = () => {
  return {
    id: productData.id,
    seller: productData.seller,
    price: productData.price,
    product_name: productData.product_name,
    product_status: productData.product_status,
    post_status: productData.post_status,
    product_content: productData.product_content,
    product_image: productData.product_image,
    place: productData.place,
    created_time: productData.created_time,
    time: productData.time,
  };
};
