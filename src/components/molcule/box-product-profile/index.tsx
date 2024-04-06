import { ProfileAvatar } from 'components/index';
import * as S from './style';
import { levelUrlArr } from 'utils/levelUrlArr';
import { Seller } from 'types/productType';

const data = {
  time: '08/13 16:30',
};

interface BoxProductProfileProps {
  seller: Seller;
}

const BoxProductProfile = ({ seller }: BoxProductProfileProps) => {
  return (
    <S.Container>
      <ProfileAvatar imageUrl={seller.profile_image[0]} />

      <S.Profile>
        <div className="name">
          <p>{seller.nick_name}</p>
          <img src={levelUrlArr(seller.level)} alt="profile level" />
        </div>
        <p className="time">{data.time}</p>
      </S.Profile>
    </S.Container>
  );
};

export default BoxProductProfile;
