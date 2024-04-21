import { BoxDonationImg } from 'components/index';
import { useEffect, useState } from 'react';
import { useDonationFormActions } from 'store/donationForm';
import styled from 'styled-components';

export const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px -33px -20px -33px;
`;
const DonationSelectGroup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { setIsDisabled } = useDonationFormActions();

  useEffect(() => {
    setIsDisabled(activeIndex === null);
  }, [activeIndex]);

  return (
    <ImageWrapper className="img">
      <BoxDonationImg activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </ImageWrapper>
  );
};

export default DonationSelectGroup;
