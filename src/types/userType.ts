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

// 프로필 수정 데이터 타입
export interface ProfileUserType {
  user_name: string;
  nick_name: string;
  profile_image: string[];
  style: string[];
}

// 차단한 사용자 데이터 타입
export interface BlockedUserType {
  blocked_user_id: string;
  blocked_user_name: string;
  blocked_user_profile_image: string;
  blocked_user_level: string;
}
