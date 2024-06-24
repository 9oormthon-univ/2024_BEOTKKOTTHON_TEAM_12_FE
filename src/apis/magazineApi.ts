import { instance } from 'apis';
import { USER_ID } from 'constants/shared';

const POST = {
  postDonationData(totalPoints: number) {
    return instance.post(`magazine/${USER_ID}?score=${totalPoints}`);
  },
};

const MAGAZINE_API = {
  POST,
};

export default MAGAZINE_API;
