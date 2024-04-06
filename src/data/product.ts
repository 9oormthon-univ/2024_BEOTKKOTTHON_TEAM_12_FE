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
};

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
