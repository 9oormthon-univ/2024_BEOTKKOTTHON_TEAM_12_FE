import { Header, TextLabel } from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import ListItem from '@components/molcule/list-item';
import { BlockUser } from 'src/types/types';
import defaultImg from '@assets/images/profile-default-image.svg';
import level1Icon from '@assets/icons/profile-icon-level1.svg';
const BlockedUsers = () => {
  const navigate = useNavigate();
  const blockedUserList: BlockUser[] = [
    {
      id: 1,
      name: '김스옹',
      levelImg: level1Icon,
      profile: defaultImg,
    },
    {
      id: 2,
      name: '안정민',
      levelImg: level1Icon,
      profile: defaultImg,
    },
  ];

  const onClickBlock = () => {
    console.log('차단 해제');
  };
  return (
    <>
      <Header>
        <TextLabel text="차단한 사용자" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
      </Header>
      <ListItem blockList={blockedUserList} buttonName="차단 해제" onClick={onClickBlock} />
    </>
  );
};

export default BlockedUsers;
