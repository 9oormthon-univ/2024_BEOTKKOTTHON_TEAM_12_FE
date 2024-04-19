import { ContainerProgressForm, FormDonationBasic } from 'components/index';
import { useState } from 'react';

const DonationBasicForm = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <ContainerProgressForm
      totalpage={4}
      page={2}
      header="기본 정보 입력"
      btn="다음"
      // to="/donation/form-request"
      isDisabled={isDisabled}
    >
      <FormDonationBasic setIsDisabled={setIsDisabled} />
    </ContainerProgressForm>
  );
};

export default DonationBasicForm;
