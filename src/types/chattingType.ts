import { InfiniteQueryResponse } from './common';

export interface ChattingType {
  message_user_type: string;
  message: string | null;
  message_image: string[] | null;
  timestamp: string;
  send_date_time: string;
  is_mine: boolean;
}

export interface MessageType {
  sender_id: number;
  sender_nick_name: string;
  profile_image: string[];
  message?: string;
  message_image?: string[];
  timestamp: string;
  is_mine: boolean;
  sender_type: string;
}

export interface ChattingListType {
  chat_room_id: number;
  product_image: string[];
  chat_other_id: number;
  chat_other_nick_name: string;
  chat_other_level: string;
  message_info: {
    message: string;
    message_image: string[];
    time: string;
    is_mine: boolean;
  };
}

export interface ChattingDetailResponse {
  chat_room_id: number;
  product_id: number;
  product_image: string[];
  product_name: string;
  price: number;
  seller_id: number;
  seller_nick_name: string;
  seller_profile_image: string[];
  seller_level: string;
  customer_id: string;
  customer_nick_name: string;
  customer_profile_image: string[];
  customer_level: string;
  message_info_list: ChattingType[];
}

export interface NewRoomResponse {
  chat_room_id: number;
  is_created: boolean;
}

export type ChattingListResponse = InfiniteQueryResponse<ChattingListType[]>;
