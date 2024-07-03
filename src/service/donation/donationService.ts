import { USER_ID } from 'constants/shared';
import { getData, postData } from 'service/service';
import { DefaultQueryResponse } from 'types/common';
import { DonationRequest, RankingResponse } from 'types/donation';

const GET = {
  ranking(): Promise<RankingResponse> {
    return getData(`/university/rank`);
  },
};

const POST = {
  postDonation(charityNumber: number, sendData: DonationRequest): Promise<DefaultQueryResponse> {
    return postData(`/donations/${USER_ID}?charity=${charityNumber}`, sendData);
  },
};

const donationService = {
  GET,
  POST,
};

export default donationService;
