const userData = {
  id: 1,
  created_at: '2024-04-05 19:31:36',
  deleted_at: null,
  updated_at: '2024-04-05 19:31:36',
  level: '씨앗',
  nick_name: '미정',
  point: 0,
  profile_image: [
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/bf75da33ff907c43387feb5496922eb4.jpg',
  ],
  university_email: '2271224@hansung.ac.kr',
  user_name: '박미정',
  user_password: 'wearpassword',
  user_created_id: 'wearid',
  university_name: '성균관대학교 서울캠퍼스',
  style: ['빈티지', '페미닌', '캐주얼'],
  next_level: '목화',
  remain_level_point: 100,

  // 차단한 사용자 정보
  blocked_user_id: 'sdfjsldf',
  blocked_user_name: 'user1',
  blocked_user_profile_image:
    'https://wear-bucket.s3.ap-northeast-2.amazonaws.com/bf75da33ff907c43387feb5496922eb4.jpg',
  blocked_user_level: '새싹',
};

// 로그인 페이지
export const loginUserDummyData = () => {
  return {
    user_created_id: 'wearid2',
    user_password: 'wearpassword2',
  };
};

// 마이페이지 데이터
export const mypageUserDummyData = () => {
  return {
    user_name: userData.user_name,
    nick_name: userData.nick_name,
    university_name: userData.university_name,
    style: userData.style,
    profile_image: userData.profile_image,
    level: userData.level,
    next_level: userData.next_level,
    point: userData.point,
    remain_level_point: userData.remain_level_point,
  };
};

// 계정 정보 데이터
export const accountUserDummyData = () => {
  return {
    user_name: userData.user_name,
    university_name: userData.university_name,
    university_email: userData.university_email,
  };
};

// 프로필 수정 데이터
export const profileUserDummyData = () => {
  return {
    user_name: userData.user_name,
    nick_name: userData.nick_name,
    profile_image: userData.profile_image,
    style: userData.style,
  };
};

// 차단한 사용자 데이터
export const blockedUserDummyData = () => {
  return [
    {
      blocked_user_id: userData.blocked_user_id,
      blocked_user_name: userData.blocked_user_name,
      blocked_user_profile_image: userData.blocked_user_profile_image,
      blocked_user_level: userData.blocked_user_level,
    },
    {
      blocked_user_id: userData.blocked_user_id,
      blocked_user_name: userData.blocked_user_name,
      blocked_user_profile_image: userData.blocked_user_profile_image,
      blocked_user_level: userData.blocked_user_level,
    },
  ];
};
