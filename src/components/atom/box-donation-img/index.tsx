import { Dispatch, SetStateAction } from 'react';
import * as S from './style';
import otcan from '@assets/donation/otcan.svg';
import beutiful from '@assets/donation/beautiful.svg';
import goodwill from '@assets/donation/goodwill.svg';

interface BoxDonationImgProps {
  activeIndex?: number | null;
  setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const BoxDonationImg = ({ activeIndex, setActiveIndex }: BoxDonationImgProps) => {
  const imgUrl = [otcan, beutiful, goodwill];

  const handleClick = (index: number) => {
    if (setActiveIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <S.Container>
      {imgUrl.map((img, index) => (
        <S.BoxImage key={`${img}-${index}`} className={activeIndex === index ? 'active' : ''}>
          <img src={img} alt="otcan" onClick={() => handleClick(index)} />
        </S.BoxImage>
      ))}
    </S.Container>
  );
};

export default BoxDonationImg;
