import { BoxUpload } from '@components/index';
import * as S from './style';
import cancle from '@assets/icons/cancel.svg';

interface ListImageProps {
  showImages: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListImage = ({ showImages, handleChange }: ListImageProps) => {
  return (
    <S.Container>
      <BoxUpload handleChange={handleChange} />

      {showImages.map((img, id) => (
        <S.BoxImage key={id}>
          <img src={img} className="img" alt={`img-${id}`} />
          <img src={cancle} className="close" alt="close" />
        </S.BoxImage>
      ))}
    </S.Container>
  );
};

export default ListImage;
