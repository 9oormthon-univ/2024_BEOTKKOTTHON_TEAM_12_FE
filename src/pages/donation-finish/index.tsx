import { Link } from 'react-router-dom';
import * as S from './style';
import { Button } from 'components/index';
import logo from 'assets/logo/donation-logo.svg';
import { instance } from 'apis';
import { useCharityNumber, useDonationForm } from 'store/donationForm';
import { useEffect } from 'react';
import useUserStore from 'store/userId';

const DonationFinish = () => {
  const donationForm = useDonationForm();
  const charityNumber = useCharityNumber();

  const userId = useUserStore((state: any) => state.userId);

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

  const postDonationData = async () => {
    try {
      const response = await instance.post(`/donations/${userId}?charity=${charityNumber}`, {
        sendData,
      });
      console.log(response.data);
    } catch (error) {
      console.error('기부 데이터 저장 실패', error);
    }
  };

  useEffect(() => {
    postDonationData();
  }, []);

  return (
    <>
      <S.Container>
        <S.BoxImg>
          <img src={logo} alt="logo" />
        </S.BoxImg>
        <p className="green">기부 신청이 완료되었습니다.</p>
        <div className="grey">
          <p>기부 인증 진행 절차는 마이페이지 &gt; 기부 내역에서</p>
          <p>확인하실 수 있습니다.</p>
        </div>
      </S.Container>

      <Link to={'/donation'}>
        <S.BtnNext>
          <Button
            width="100%"
            color="white"
            $bgcolor="var(--green-6)"
            $borderRadius="8px"
            fontSize="16px"
            $padding="16px"
          >
            확인
          </Button>
        </S.BtnNext>
      </Link>
    </>
  );
};

export default DonationFinish;
