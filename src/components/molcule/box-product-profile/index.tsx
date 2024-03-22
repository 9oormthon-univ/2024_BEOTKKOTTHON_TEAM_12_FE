import { ProfileAvatar } from '@components/index';
import * as S from './style';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { userProfile } from 'src/data/shared';
import { Seller } from 'src/types/types';

const data = {
  time: '08/13 16:30',
};

interface BoxProductProfileProps {
  user: Seller;
}

const BoxProductProfile = ({ user }: BoxProductProfileProps) => {
  return (
    <S.Container>
      <ProfileAvatar imageUrl={user.profile_image} />

      <S.Profile>
        <div className="name">
          <p>{user.nick_name}</p>
          <img src={levelUrlArr(user.level)} alt="profile level" />
        </div>
        <p className="time">{data.time}</p>
      </S.Profile>
    </S.Container>
  );
};

export default BoxProductProfile;
