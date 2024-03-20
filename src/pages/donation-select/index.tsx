import { BoxDonationImg, ContainerDonation } from '@components/index';
import { useEffect, useState } from 'react';

const DonationSelect = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(activeIndex === null);
  }, [activeIndex]);

  return (
    <ContainerDonation
      page={0}
      header="기부할 단체를 선택해주세요"
      btn="다음"
      to="/donation/notice"
      isDisabled={isDisabled}
    >
      <section className="img">
        <BoxDonationImg activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </section>
    </ContainerDonation>
  );
};

export default DonationSelect;
