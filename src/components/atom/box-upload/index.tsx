import * as S from './style';
import image from 'assets/icons/image.svg';
import { useFormDataActions, useShowImages } from 'store/formData';
import { useImgUploadMutation } from 'hooks/queries/image-upload/useImgUploadMutaion';

const BoxUpload = () => {
  const showImages = useShowImages();
  const { setShowImages } = useFormDataActions();
  const { mutate: ImgUploadMutation } = useImgUploadMutation();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const sendImgData = new FormData();

    if (files) {
      for (let i = 0; i < files.length; i++) {
        sendImgData.append('files', files[i]);
      }

      ImgUploadMutation(sendImgData);

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
    }
  };

  return (
    <S.Container>
      <label htmlFor="product_image_list">
        <img src={image} alt="img" />
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
