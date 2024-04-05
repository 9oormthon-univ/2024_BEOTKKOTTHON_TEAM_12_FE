import React from 'react';

export interface TabItemProps {
  label: string;
  // count: number;
  ContentComponent: React.ComponentType;
}
/*상품 리스트에만 사용되는 제품 타입 */
export interface ProductListItem {
  id: number;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_image: string;
  is_selected?: boolean;
}
/**리스트에 필요한 상품 데이터 prop */
export interface ProductProp {
  productData: ProductListItem[];
}

/*차단한 사용자 타입 */
export interface BlockUser {
  blocked_user_id: number;
  blocked_user_name: string;
  levelImg: string;
  blocked_user_profile_image: string;
}

export interface Seller {
  id: number;
  nick_name: string;
  profile_image: string;
  level: string;
}

export interface Product {
  id: number;
  product_name: string; // 제목
  price: number;
  product_image: string[]; // 이미지 url 리스트
  product_image_list?: string; // 이미지 url 리스트
  product_content: string; // 상품 설명
  product_status: string; // 상품 상태
  post_status: string; // 판매 상태
  place: string; // 거래 장소
  is_private?: boolean; // 숨김 상태
  category: string; // 카테고리
  wish?: string;
  count?: string;
  seller?: Seller;
}

//채팅룸
export interface ChatRoom {
  product_id?: string;
  chat_room_id?: string;
  user_profile_image: string;
  user_level?: string;
  user_nick_name: string;
  last_massage?: string;
  timestamp?: string;
}

// 사용자
export interface UserProfileInfo {
  user_name: string;
  nick_name: string;
  university_name: string;
  style: string[];
  profile_image: string;
  level: string;
  next_level: string;
  point: number;
  remain_level_point: number;
}

// 퀴즈
export interface Quiz {
  title_num: number;
  point: number;
  question: string;
  list: string[];
  answer: number;
}

// 상품 폼 전송
export interface TradeFormData {
  product_image: string[];
  product_name: string;
  category_name: string;
  product_status: string;
  product_content: string;
  price: number;
  place: string;
}

// 기부 폼 전송
export interface DonationFormData {
  user_name: string;
  address: string;
  phone: string;
  email: string;
  donation_item: string;
  clothes_count: number;
  fashion_count: number;
  box_count: number;
}

// 기부 목록 타입
export interface DonationDataType {
  id: number;
  date: string;
  clothes_count: number;
  fashion_count: number;
  is_donation_complete: boolean;
}
