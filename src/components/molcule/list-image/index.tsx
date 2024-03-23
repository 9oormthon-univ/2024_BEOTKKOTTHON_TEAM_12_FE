import { BoxUpload } from 'components/index';
import * as S from './style';
import cancle from 'assets/icons/cancel.svg';
import { useFormDataActions, useShowImages } from 'store/formData';
import { Dispatch, SetStateAction } from 'react';

const ListImage = () => {
  const showImages = useShowImages();
  const { setShowImages } = useFormDataActions();

  const handleClick = (i: number) => {
    const filterdUrls = showImages.filter((_, index) => index !== i);
    setShowImages(filterdUrls);
  };

  return (
    <S.Container>
      <BoxUpload />

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
