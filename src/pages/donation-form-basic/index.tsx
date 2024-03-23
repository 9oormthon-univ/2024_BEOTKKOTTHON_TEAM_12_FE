import { ContainerDonation, FormDonationBasic } from "components/index";
import { useState } from "react";

const DonationFormBasic = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  return (
    <ContainerDonation
      page={2}
      header="기본 정보 입력"
      btn="다음"
      to="/donation/form-request"
      isDisabled={isDisabled}
    >
      <FormDonationBasic setIsDisabled={setIsDisabled} />
    </ContainerDonation>
  );
};

export default DonationFormBasic;
