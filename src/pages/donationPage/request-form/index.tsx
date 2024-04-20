import { ContainerProgressForm, FormDonationRequest } from 'components/index';
import { useState } from 'react';

const DonationRequestForm = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <ContainerProgressForm
      totalpage={4}
      page={3}
      header="물품 기부 신청하기"
      btn="완료"
      // to="/donation/finish"
      isDisabled={isDisabled}
    >
      <FormDonationRequest setIsDisabled={setIsDisabled} />
    </ContainerProgressForm>
  );
};
export default DonationRequestForm;
