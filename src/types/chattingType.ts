export interface ChattingType {
  message_user_type: string;
  message: string;
  message_image: string[];
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
