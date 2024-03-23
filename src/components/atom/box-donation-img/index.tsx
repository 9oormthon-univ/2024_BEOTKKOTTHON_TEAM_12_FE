import { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import otcan from "assets/donation/otcan.svg";
import beutiful from "assets/donation/beautiful.svg";
import goodwill from "assets/donation/goodwill.svg";
import { useDonationFormActions } from "store/donationForm";

interface BoxDonationImgProps {
  activeIndex?: number | null;
  setActiveIndex?: Dispatch<SetStateAction<number | null>>;
}

const BoxDonationImg = ({
  activeIndex,
  setActiveIndex,
}: BoxDonationImgProps) => {
  const imgUrl = [beutiful, otcan, goodwill];
  const { setCharityNumber } = useDonationFormActions();

  const handleClick = (index: number) => {
    if (setActiveIndex) {
      setCharityNumber(index);
      setActiveIndex(index);
    }
  };

  return (
    <S.Container>
      {imgUrl.map((img, index) => {
        const className = activeIndex === index ? "active" : "";
        const imgName = img === otcan ? "otcan" : "";

        return (
          <S.BoxImage
            key={`${img}-${index}`}
            className={`${className} ${imgName}`}
            onClick={() => handleClick(index)}
          >
            <img src={img} alt={`${index}`} />
          </S.BoxImage>
        );
      })}
    </S.Container>
  );
};

export default BoxDonationImg;
