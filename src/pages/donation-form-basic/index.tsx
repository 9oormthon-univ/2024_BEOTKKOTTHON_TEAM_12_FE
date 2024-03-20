import { ContainerDonation, FormDonationBasic } from '@components/index';

const DonationFormBasic = () => {
  return (
    <ContainerDonation page={2} header="기본 정보 입력" btn="다음" to="/donation/form-request">
      <FormDonationBasic />
    </ContainerDonation>
  );
};

export default DonationFormBasic;
