import { DefaultQueryResponse, InfiniteQueryResponse } from './common';

// 차단한 사용자 데이터 타입
export interface BlockList {
  blocked_user_id: string;
  blocked_user_nick_name: string;
  blocked_user_profile_image: string;
  blocked_user_level: string;
}

// 회원가입 폼 데이터 타입
export interface SigninFormDataType {
  userId: string;
  password: string;
  validPassword: string;
  universityName: string;
  universityEmail: string;
  styleTags: string[];
}

// 마이페이지 응답 데이터 타입
export interface MypageResponse {
  user_name: string;
  nick_name: string;
  university_name: string;
  style: string[];
  profile_image: string[];
  level: string;
  next_level: string;
  point: number;
  remain_level_point: number;
}

// 사용자 프로필 타입
export type UserProfile = Pick<MypageResponse, 'nick_name' | 'profile_image' | 'style'>;

// 계정 응답 데이터 타입
export interface AccountResponse {
  user_name: string;
  university_name: string;
  university_email: string;
}

// 제품 데이터 타입
interface Products {
  id: number;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_image: string[];
  time: string;
}

// 완료된 제품 타입
export type CompletedProducts = Products;

// 판매 중인 제품 타입
export type SalesProducts = Products;

// 숨김 처리된 제품 타입
export interface HiddenProducts extends Products {
  is_private: boolean;
}

// 구매한 제품 타입
export interface PurchaseProduct extends Products {
  is_selected: boolean;
}
export type PurchaseProductsResponse = PurchaseProduct[];

// 위시리스트 아이템 타입
export interface WishItem extends Products {
  is_selected: boolean;
}
export type WishListResponse = InfiniteQueryResponse<WishItem[]>;

// 기부 내역 데이터 타입
export interface DonationHistory {
  id: number;
  date: string;
  clothes_count: number;
  fashion_count: number;
  is_donation_complete: boolean;
}

// 프로필 응답 데이터 타입
export interface ProfileResponse {
  nick_name: string;
  profile_image: string[];
  style: string[];
}

// 응답 데이터 타입
export type UnblockResponse = DefaultQueryResponse;
export type BlockListResponse = InfiniteQueryResponse<BlockList>;
export type CompletedProductsResponse = InfiniteQueryResponse<CompletedProducts>;
export type HiddenProductsResponse = InfiniteQueryResponse<HiddenProducts>;
export type DonationHistoryResponse = InfiniteQueryResponse<DonationHistory>;
export type SalesProductsResponse = InfiniteQueryResponse<SalesProducts>;
