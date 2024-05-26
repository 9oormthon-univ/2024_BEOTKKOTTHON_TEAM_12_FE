import { BoxUpload } from 'components/index';
import * as S from './style';
import { useFormDataActions, useShowImages } from 'store/productFormData';
import { IoIosCloseCircle } from 'react-icons/io';

const ListImage = () => {
  const showImages = useShowImages();
  const { changeShowImages } = useFormDataActions();

  const handleClick = (i: number) => {
    const filterdUrls = showImages.filter((_, index) => index !== i);
    changeShowImages(filterdUrls);
  };

  return (
    <S.Container>
      <BoxUpload />

      {showImages.map((img, i) => (
        <S.BoxImage key={i}>
          <img src={img} className="img" alt={`img-${i}`} />
          <IoIosCloseCircle onClick={() => handleClick(i)} />
        </S.BoxImage>
      ))}
    </S.Container>
  );
};

export default ListImage;
