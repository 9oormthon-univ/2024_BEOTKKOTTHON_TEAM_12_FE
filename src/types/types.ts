import React from 'react';

export interface ListImageProps {
  showImages: string[];
  formData: Product;
  setShowImages: (value: string[]) => void;
  setFormData: (value: Product) => void;
}

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

// <수정본>
export interface Product {
  id: string;
  name: string; // 제목
  imgs?: FileList; // 이미지 파일 리스트
  recievedImgUrl?: string[];
  category?: string; // 카테고리
  time: string; // 작성 시간
  state: string; // 상품 상태
  description?: string; // 상품 설명
  price: number; // 가격
  sold?: string; // 판매 상태
  place?: string; // 거래 장소
}
