import { BoxDonationImg, ContainerProgressForm } from 'components/index';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const ImageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px -33px -20px -33px;
`;
const DonationSelectGroup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(activeIndex === null);
  }, [activeIndex]);

  return (
    <ContainerProgressForm
      totalpage={4}
      page={0}
      header="기부할 단체를 선택해주세요"
      btn="다음"
      to="/donation/notice"
      isDisabled={isDisabled}
    >
      <ImageWrapper className="img">
        <BoxDonationImg activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </ImageWrapper>
    </ContainerProgressForm>
  );
};

export default DonationSelectGroup;
