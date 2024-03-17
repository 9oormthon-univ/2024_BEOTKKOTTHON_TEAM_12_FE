import * as S from './style';
import image from '@assets/icons/image.svg';
import { useFormDataActions, useShowImages } from 'src/store/formData';

const BoxUpload = () => {
  const showImages = useShowImages();
  const { setFormData, setShowImages } = useFormDataActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (files) {
      const imageLists = files;
      let imageUrlLists = [...showImages];

      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      if (imageUrlLists.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }
      setShowImages(imageUrlLists);
      setFormData('product_image', files);
    }
  };

  return (
    <S.Container>
      <label htmlFor="product_image">
        <img src={image} alt="img" />
      </label>

      <input
        type="file"
        id="product_image"
        name="product_image"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
    </S.Container>
  );
};

export default BoxUpload;
