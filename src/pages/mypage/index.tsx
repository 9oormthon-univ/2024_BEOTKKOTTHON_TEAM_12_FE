import React, { useEffect } from 'react';
import * as S from './style';
import { UserSection, MenuItem, Nav } from '@components/index';
import useStore from '../../store/userData';
import { instance } from 'src/apis';
const MyPage: React.FC = () => {
  const { updateUserProfileInfo } = useStore();

  // useEffect(() => {
  //   initUserProfileInfo();
  // }, [initUserProfileInfo]);

  // 로그인된 사용자 id 필요
  const userId = 1;

  const getData = async () => {
    await instance
      .get(`users/${userId}`)
      .then((res) => {
        console.log('마이페이지 데이터 가져오기 성공', res);
        updateUserProfileInfo(res.data);
      })
      .catch((e) => {
        console.log('마이페이지 데이터 가져오기 실패', e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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

export default MyPage;
