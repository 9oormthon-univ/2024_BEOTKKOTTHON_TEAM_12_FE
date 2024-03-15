import { ProfileAvatar } from '@components/index';
import * as S from './style';
import { levelUrlArr } from 'src/utils/levelUrlArr';
import { userProfile } from 'src/data/shared';

const data = {
  time: '08/13 16:30',
};

const BoxProductProfile = () => {
  return (
    <S.Container>
      <ProfileAvatar imageUrl={userProfile.profileImg} />

      <S.Profile>
        <div className="name">
          <p>{userProfile.nickname}</p>
          <img src={levelUrlArr(userProfile.level)} alt="profile level" />
        </div>
        <p className="time">{data.time}</p>
      </S.Profile>
    </S.Container>
  );
};

export default BoxProductProfile;
