import { BoxUpload } from '@components/index';
import * as S from './style';
import cancle from '@assets/icons/cancel.svg';
import { useFormDataActions, useShowImages } from 'src/store/formData';
// import { Dispatch, SetStateAction } from 'react';

// interface ListImageProps {
//   setFiles?: Dispatch<SetStateAction<FileList>>;
// }

const ListImage = () => {
  // const ListImage = ({ setFiles }: ListImageProps) => {
  const showImages = useShowImages();
  const { setShowImages } = useFormDataActions();

  const handleClick = (i: number) => {
    const filterdUrls = showImages[i];
    // const filterdUrls = showImages.filter((_, index) => index !== i);
    setShowImages(filterdUrls);
  };

  return (
    <S.Container>
      <BoxUpload />
      {/* <BoxUpload setFiles={setFiles} /> */}

      <S.BoxImage>
        <img src={showImages} className="img" alt={`img`} />
        <img src={cancle} className="close" onClick={() => handleClick(0)} alt="close" />
      </S.BoxImage>
      {/* {showImages.map((img, i) => (
        <S.BoxImage key={i}>
          <img src={img} className="img" alt={`img-${i}`} />
          <img src={cancle} className="close" onClick={() => handleClick(i)} alt="close" />
        </S.BoxImage>
      ))} */}
    </S.Container>
  );
};

export default ListImage;
