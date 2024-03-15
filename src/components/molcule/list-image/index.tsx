import { BoxUpload } from '@components/index';
import * as S from './style';
import cancle from '@assets/icons/cancel.svg';

interface ListImageProps {
  showImages: string[];
  setShowImages: (value: string[]) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListImage = ({ setShowImages, showImages, handleChange }: ListImageProps) => {
  const handleClick = (i: number) => {
    const temp = showImages.filter((_, index) => index !== i);
    setShowImages(temp);
  };

  return (
    <S.Container>
      <BoxUpload handleChange={handleChange} />

      {showImages.map((img, i) => (
        <S.BoxImage key={i}>
          <img src={img} className="img" alt={`img-${i}`} />
          <img src={cancle} className="close" onClick={() => handleClick(i)} alt="close" />
        </S.BoxImage>
      ))}
    </S.Container>
  );
};

export default ListImage;
