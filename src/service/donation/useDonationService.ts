import { useMutation, useQuery } from '@tanstack/react-query';
import queryKeys from './queries';
import donationService from './donationService';
import { useCharityNumber, useDonationForm } from 'store/donationForm';

export const useRanking = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: () => donationService.GET.ranking(),
  });
};

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
    mutationFn: () => donationService.POST.postDonation(charityNumber, sendData),
  });
};
