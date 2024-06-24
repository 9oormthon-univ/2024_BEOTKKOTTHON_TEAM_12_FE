import { instance } from 'apis';
import { USER_ID } from 'constants/shared';
import { DonationType } from 'types/donationType';

const GET = {
  getRankingData() {
    return instance.get(`/university/rank`);
  },
};

const POST = {
  postDonationData(charityNumber: number, sendData: DonationType) {
    return instance.post(`/donations/${USER_ID}?charity=${charityNumber}`, sendData);
  },
};

const DONATION_API = {
  GET,
  POST,
};

export default DONATION_API;
