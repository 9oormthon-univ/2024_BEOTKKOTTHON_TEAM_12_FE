import React from 'react';

export interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}
/*판매중인 상품 타입 */
export interface SalesInProgressProps {
  salesData: Product[];
}
/*판매 완료 상품 타입 */
export interface SalesCompletedProps {
  salesCompletedData: Product[];
}
/*숨긴 상품 타입  */
export interface HiddenItemsProps {
  hiddenItemsData: Product[];
}
/*차단한 사용자 타입 */
export interface BlockUser {
  id: number;
  name: string;
  levelImg: string;
  profile: string;
}

export interface Product {
  id: number;
  product_name: string; // 제목
  price: number;
  product_image: string[]; // 이미지 url 리스트
  product_content: string; // 상품 설명
  product_status: string; // 상품 상태
  post_status: string; // 판매 상태
  place: string; // 거래 장소
  is_private: boolean; // 숨김 상태
  category_id: string; // 카테고리
  wish: string;
  count: string;
}

//채팅룸
export interface ChatRoom {
  id: string;
  imageUrl: string;
  senderName: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}
