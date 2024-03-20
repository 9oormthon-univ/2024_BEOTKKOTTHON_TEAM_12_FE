import { ContainerDonation, FormDonationRequest } from '@components/index';

const DonationFormRequest = () => {
  return (
    <ContainerDonation page={3} header="물품 기부 신청하기" btn="완료" to="/donation/finish">
      <FormDonationRequest />
    </ContainerDonation>
  );
};
export default DonationFormRequest;
