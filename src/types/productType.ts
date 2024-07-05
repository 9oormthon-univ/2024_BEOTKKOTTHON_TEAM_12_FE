import { InfiniteQueryResponse } from './common';

// 상품 리스트 타입
export interface ProductItem {
  id: number;
  product_image: string[];
  product_name: string;
  product_status: string;
  post_status: string;
  price: number;
  is_selected?: boolean;
  time: string;
}

export interface ProductDetailResponse extends ProductItem {
  seller: Seller;
  product_content: string;
  place: string;
  created_time: string;
  is_private: boolean;
}

// 판매자 데이터 타입
export interface Seller {
  id: number;
  nick_name: string;
  profile_image: string[];
  level: string;
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

export interface ProductEditResponse extends ProductFormDataType {
  id: number;
  post_status: string;
}

export interface PopularSearchResponse {
  search_name_rank_list: string[];
  date: string;
  time: string;
}

export interface RecentSearchResponse {
  search_name_list: string[];
}

export type MainResponse = InfiniteQueryResponse<ProductItem>;
export type SearchResponse = InfiniteQueryResponse<ProductItem>;
