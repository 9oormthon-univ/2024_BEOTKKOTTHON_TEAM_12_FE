import { InfiniteQueryResponse } from './common';

// 마이페이지 데이터 타입
export interface MypageUserType {
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

// 차단한 사용자 데이터 타입
export interface BlockListType {
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

// 계정정보 데이터 타입
export interface AccountInfo {
  user_name: string;
  university_name: string;
  university_email: string;
}

interface Products {
  id: number;
  price: number;
  product_name: string;
  product_status: string;
  post_status: string;
  product_image: string[];
  time: string;
}

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

export interface AccountResponse {
  user_name: string;
  university_name: string;
  university_email: string;
}

export type CompletedProducts = Products;
export type SalesProducts = Products;

export interface HiddenProducts extends Products {
  is_private: boolean;
}

export interface PurchaseProduct extends Products {
  is_selected: boolean;
}

export interface WishItem extends Products {
  is_selected: boolean;
}

export interface DonationHistory {
  id: number;
  date: string;
  clothes_count: number;
  fashion_count: number;
  is_donation_complete: boolean;
}

export interface ProfileResponse {
  nick_name: string;
  profile_image: string[];
  style: string[];
}

export interface UnblockResponse {
  status: number;
  message: string;
  timestamp: string;
}

export type PurchaseProductsResponse = Array<PurchaseProduct>;
export type BlockListResponse = InfiniteQueryResponse<BlockListType>;
export type CompletedProductsResponse = InfiniteQueryResponse<CompletedProducts>;
export type HiddenProductsResponse = InfiniteQueryResponse<HiddenProducts>;
export type DonationHistoryResponse = InfiniteQueryResponse<DonationHistory>;
export type WishListResponse = InfiniteQueryResponse<WishItem[]>;
export type SalesProductsResponse = InfiniteQueryResponse<SalesProducts>;
export type UserProfile = Pick<MypageResponse, 'nick_name' | 'profile_image' | 'style'>;
