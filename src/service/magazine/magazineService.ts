import { USER_ID } from 'constants/shared';
import { postData } from 'service/service';
import { DefaultQueryResponse } from 'types/common';

const POST = {
  postQuiz(totalPoints: number): Promise<DefaultQueryResponse> {
    return postData(`magazine/${USER_ID}?score=${totalPoints}`, {});
  },
};

const magazineService = {
  POST,
};

export default magazineService;
