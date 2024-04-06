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
};

export const loginUserDummyData = () => {
  return {
    user_created_id: 'wearid',
    user_password: 'wearpassword',
  };
};

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

export const accountUserDummyData = () => {
  return {
    user_name: userData.user_name,
    university_name: userData.university_name,
    university_email: userData.university_email,
  };
};

export const profileUserDummyData = () => {
  return {
    user_name: userData.user_name,
    nick_name: userData.nick_name,
    profile_image: userData.profile_image,
    style: userData.style,
  };
};
