import React, { useEffect } from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from 'components/index';
import { useUserProfileActions } from '../../../store/userData';
import { userProfile } from 'data/shared';
import { instance } from 'apis';
import { useQuery } from '@tanstack/react-query';

const userId = '1';

const getUserData = async () => {
  try {
    const response = await instance.get(`/users/${userId}`);
    console.log('마이페이지 불러오기 성공', response);
    return response.data;
  } catch (e) {
    console.error('마이페이지 불러오기 실패', e);
    return userProfile;
  }
};

const MyPageMain: React.FC = () => {
  const { updateUserProfileInfo } = useUserProfileActions();
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUserData,
  });

  useEffect(() => {
    if (data) {
      updateUserProfileInfo(data);
    }
  }, [data]);

  return (
    <>
      <S.MenuItemWrapper>
        <UserSection />
        <MenuItem />
      </S.MenuItemWrapper>
      <Nav currentTab="마이페이지" />
    </>
  );
};

export default MyPageMain;
