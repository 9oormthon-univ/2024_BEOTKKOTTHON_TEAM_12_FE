import { BoxInput, FormGroup } from '@components/index';
import * as S from './style';
import image from '@assets/icons/image.svg';
import { useState } from 'react';
import cancle from '@assets/icons/cancel.svg';

interface FormDataType {
  imgs: FileList;
  // imgs: string[];
  title: string;
  category: string;
  state: string;
  description: string;
  price: string;
  place: string;
}

const FormTrade = () => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    imgs: {} as FileList,
    // imgs: [],
    title: '',
    category: '',
    state: '',
    description: '',
    price: '',
    place: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | null>) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files as FileList;

    if (name === 'imgs') {
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
        setFormData({ ...formData, imgs: files });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form>
      <FormGroup>
        <p className="label">이미지 업로드</p>

        <S.ListImage>
          <S.BoxUpload htmlFor="img">
            <img src={image} alt="img" />
          </S.BoxUpload>

          <S.RemoveInput
            type="file"
            id="img"
            name="imgs"
            accept="image/*"
            multiple
            onChange={onChange}
          />
          {showImages.map((img, id) => (
            <S.BoxImage key={id}>
              <img src={img} className="img" alt={`${img}-${id}`} />
              <img src={cancle} className="close" alt="close" />
            </S.BoxImage>
          ))}
        </S.ListImage>
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input name="title" onChange={onChange} placeholder="제목을 입력해주세요." />
        </BoxInput>
      </FormGroup>
    </form>
  );
};

export default FormTrade;
