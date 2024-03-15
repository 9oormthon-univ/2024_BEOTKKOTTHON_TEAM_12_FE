import React from 'react';

export interface ListImageProps {
  showImages: string[];
  formData: SaleItem;
  setShowImages: (value: string[]) => void;
  setFormData: (value: SaleItem) => void;
}

export interface TabItemProps {
  label: string;
  count: number;
  ContentComponent: React.ComponentType;
}

export interface SalesInProgressProps {
  salesData: SaleItem[];
}

export interface SalesCompletedProps {
  salesCompletedData: SaleItem[];
}

export interface HiddenItemsProps {
  hiddenItemsData: SaleItem[];
}

export interface SaleItem {
  id: number;
  name: string; // 제목
  /*
  이미지 파일 리스트로 전송 시, url 이 아닌 imgs로.
  이미지 전송 방식에 따라 두 개 합쳐야 할 듯
  */
  url?: string; // 이미지 url
  imgs?: FileList; // 이미지 파일 리스트

  category?: string; // 카테고리
  time: string; // 작성 시간
  state: string; // 상품 상태
  description?: string; // 상품 설명

  // 가격 값만 number로 저장하는건 어떤지
  price: number | string; // 가격

  sold?: string; // 판매 상태
  place?: string; // 거래 장소
}
