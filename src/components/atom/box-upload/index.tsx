import * as S from './style';
import { useFormDataActions, useProductFormData, useShowImages } from 'store/productFormData';
import { FaImage } from 'react-icons/fa';
import { useImageUpload } from 'service/image/useImageService';

const BoxUpload = () => {
  const showImages = useShowImages();
  const formData = useProductFormData();
  const { changeShowImages, changeProductFormData } = useFormDataActions();
  const { mutateAsync: imageMutation } = useImageUpload();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const sendImgData = new FormData();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        sendImgData.append('files', files[i]);
      }

      const imgStr = await imageMutation(sendImgData);
      changeProductFormData('product_image', [...formData.product_image, ...imgStr]);

      const imageLists = files;
      let imageUrlLists = [...showImages];

      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      if (imageUrlLists.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }
      changeShowImages(imageUrlLists);
    }
  };

  return (
    <S.Container>
      <label htmlFor="product_image_list">
        <FaImage size={20} color="var(--grey-4)" />
      </label>

      <input
        type="file"
        id="product_image_list"
        name="product_image_list"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
    </S.Container>
  );
};

export default BoxUpload;
