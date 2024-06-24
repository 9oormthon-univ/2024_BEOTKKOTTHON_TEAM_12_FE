import React, { useState } from 'react';
import { ContainerProgressForm, DonationTab, FormCompletePage } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useDonationFormActions, useDonationIsDisabled } from 'store/donationForm';
import { DONATION_HEADER } from 'constants/shared';

const DonationRequest: React.FC = () => {
  const navigate = useNavigate();
  const isDisabled = useDonationIsDisabled();
  const [activeIndex, setActiveIndex] = useState(0);
  const { setIsDisabled } = useDonationFormActions();

  return (
    <>
      {activeIndex === 4 && (
        <FormCompletePage
          english="Thank you!"
          main="기부가 완료되었습니다."
          sub="기부 인증 진행 절차는 마이페이지 > 기부 내역에서
        확인하실 수 있습니다."
          btnText="확인"
          onClick={() => navigate('/donation')}
        />
      )}
      {activeIndex < 4 && (
        <>
          <ContainerProgressForm
            totalpage={4}
            page={activeIndex}
            header={DONATION_HEADER[activeIndex]}
            btn="다음"
            isDisabled={isDisabled}
            onClickBtnBack={() => {
              setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
              setIsDisabled(true);
            }}
            onClickBtn={() => {
              setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : prevIndex));
              setIsDisabled(true);
            }}
          >
            <DonationTab activeIndex={activeIndex} />
          </ContainerProgressForm>
        </>
      )}
    </>
  );
};

export default DonationRequest;
