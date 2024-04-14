// 상품 리스트 타입
export interface ProductListItem {
  id: number;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_image: string[];
  is_selected: boolean;
  time: string;
}

// 판매자 데이터 타입
export interface Seller {
  id: number;
  nick_name: string;
  profile_image: string[];
  level: string;
}

// 상품 상세 페이지 타입
export interface ProductDetailItem {
  id: number;
  seller: Seller;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_content: string;
  product_image: string[];
  place: string;
  created_time: string;
  time: string;
  is_selected: boolean;
  is_private: boolean;
}

// 상품 폼 전송
export interface ProductFormDataType {
  product_image: string[];
  product_name: string;
  category_name: string;
  product_status: string;
  product_content: string;
  price: number;
  place: string;
}
