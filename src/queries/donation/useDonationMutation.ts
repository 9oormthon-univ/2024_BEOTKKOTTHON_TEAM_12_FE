import { useMutation } from '@tanstack/react-query';
import { instance } from 'apis';
import DONATION_API from 'apis/donationApi';
import { USER_ID } from 'constants/shared';
import { useCharityNumber, useDonationForm } from 'store/donationForm';

export const useDonationMutation = () => {
  const donationForm = useDonationForm();
  const charityNumber = useCharityNumber();

  const sendData = {
    user_name: donationForm.name,
    address: donationForm.addr1 + ' ' + donationForm.addr2,
    phone: donationForm.phone1 + '-' + donationForm.phone2 + '-' + donationForm.phone3,
    email: donationForm.email1 + '@' + donationForm.email2,
    donation_item: donationForm.sort,
    clothes_count: donationForm.clothes_num,
    fashion_count: donationForm.goods_num,
    box_count: donationForm.box_num,
  };

  return useMutation({
    mutationFn: () => DONATION_API.POST.postDonationData(charityNumber, sendData),
    onSuccess: (res) => {
      console.log('기부 데이터 저장 성공', res.data);
    },
    onError: (error) => console.error('기부 데이터 저장 실패', error),
  });
};
