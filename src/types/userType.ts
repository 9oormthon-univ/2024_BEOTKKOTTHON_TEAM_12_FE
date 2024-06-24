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
  nick_name: string;
  profile_image: string[];
  style: string[];
}

// 차단한 사용자 데이터 타입
export interface BlockedUserType {
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
export interface AccountInfoType {
  user_name: string;
  university_name: string;
  university_email: string;
}
