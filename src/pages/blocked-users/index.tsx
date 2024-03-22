import { Header, TextLabel } from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import ListItem from '@components/molcule/list-item';
import { BlockUser } from 'src/types/types';
import defaultImg from '@assets/images/profile-default-image.svg';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { instance } from 'src/apis';
import { useEffect, useState } from 'react';
const BlockedUsers = () => {
  const navigate = useNavigate();
  const userId = '1';
  const [blockedUserList, setBlockedUserList] = useState<BlockUser[]>([
    {
      blocked_user_id: 1,
      blocked_user_name: '김스옹',
      levelImg: levelUrlArr('목화'),
      blocked_user_profile_image: defaultImg,
    },
  ]);
  /*차단한 사용자 목록 불러오기 */
  const getBlockUserList = async () => {
    console.log('차단한 사용자 목록 불러오기');
    try {
      const response = await instance.get(`/users/blockedUsers/${userId}}`);
      console.log('차단한 사용자 목록 불러오기 성공:', response.data);
      setBlockedUserList(response.data);
    } catch (error) {
      console.error('차단한 사용자 목록 불러오기 실패:', error);
    }
  };

  /**차단한 사용자 목록 해제하기 */
  const onClickDeleteBlock = async (userName: string) => {
    console.log('차단 해제하기');
    try {
      const response = await instance.delete(`/users/blockedUsers/unBlock/${userId}`, {
        data: { blocked_user_name: userName },
      });
      console.log('차단 해제하기 성공:', response.data);
      alert('차단이 해제되었습니다.');
      getBlockUserList();
    } catch (error) {
      console.error('차단 해제하기 실패:', error);
    }
  };

  useEffect(() => {
    getBlockUserList();
  }, []);

  return (
    <>
      <Header>
        <TextLabel text="차단한 사용자" size={18} $weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>
      <ListItem blockList={blockedUserList} buttonName="차단 해제" onClick={onClickDeleteBlock} />
    </>
  );
};

export default BlockedUsers;
