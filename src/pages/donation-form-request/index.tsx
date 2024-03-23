import { ContainerDonation, FormDonationRequest } from "components/index";
import { useState } from "react";

const DonationFormRequest = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <ContainerDonation
      page={3}
      header="물품 기부 신청하기"
      btn="완료"
      to="/donation/finish"
      isDisabled={isDisabled}
    >
      <FormDonationRequest setIsDisabled={setIsDisabled} />
    </ContainerDonation>
  );
};
export default DonationFormRequest;
