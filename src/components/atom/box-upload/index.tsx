import * as S from './style';
import image from '@assets/icons/image.svg';

interface BoxUploadProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BoxUpload = ({ handleChange }: BoxUploadProps) => {
  return (
    <S.Container>
      <label htmlFor="img">
        <img src={image} alt="img" />
      </label>

      <input type="file" id="img" name="imgs" accept="image/*" multiple onChange={handleChange} />
    </S.Container>
  );
};

export default BoxUpload;
