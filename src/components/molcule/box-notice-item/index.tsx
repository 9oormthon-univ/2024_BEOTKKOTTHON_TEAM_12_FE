import * as S from "./style";
import bag from "assets/donation/bag.svg";
import possibleImg from "assets/donation/possible.svg";
import impossibleImg from "assets/donation/impossible.svg";

interface BoxNoticeItemProps {
  category: string;
  possible: string[];
  impossible: string[];
}

const BoxNoticeItem = ({
  category,
  possible,
  impossible,
}: BoxNoticeItemProps) => {
  return (
    <S.Container>
      <S.Category>
        <img src={bag} alt="bag" />
        <span>{category}</span>
      </S.Category>

      <S.BoxItem className="smile">
        <div className="img-box">
          <img src={possibleImg} alt="possible" />
        </div>
        <S.Possible>
          {possible.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </S.Possible>
      </S.BoxItem>

      <S.BoxItem>
        <div>
          <img src={impossibleImg} alt="impossible" />
        </div>
        <S.Possible>
          {impossible.map((str, index) => (
            <li key={index}>{str}</li>
          ))}
        </S.Possible>
      </S.BoxItem>
    </S.Container>
  );
};

export default BoxNoticeItem;
