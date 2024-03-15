import { BoxUpload } from '@components/index';
import * as S from './style';
import cancle from '@assets/icons/cancel.svg';
import { ListImageProps } from 'src/types/types';

const ListImage = ({ formData, setFormData, setShowImages, showImages }: ListImageProps) => {
  const handleClick = (i: number) => {
    const temp = showImages.filter((_, index) => index !== i);
    setShowImages(temp);
  };

  return (
    <S.Container>
      <BoxUpload
        showImages={showImages}
        setShowImages={setShowImages}
        formData={formData}
        setFormData={setFormData}
      />

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
