import { BoxInput, FormGroup, FormRadio, ListPrice, ListTag } from '@components/index';
import * as S from './style';
import image from '@assets/icons/image.svg';
import { useState } from 'react';
import cancle from '@assets/icons/cancel.svg';
import { categories, placeList, priceList } from 'src/data/shared';
import Button from '@components/atom/button-trade';

export interface FormDataType {
  imgs: FileList;
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
    title: '',
    category: '',
    state: '',
    description: '',
    price: '',
    place: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | null>) => {
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
            onChange={handleChange}
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
          <input name="title" onChange={handleChange} placeholder="제목을 입력해주세요." />
        </BoxInput>
      </FormGroup>

      <FormGroup>
        <p className="label">분류</p>
        <ListTag formData={formData} setFormData={setFormData} />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 상태</p>
        <FormRadio handleChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 설명</p>
        <S.TextArea
          name="description"
          onChange={handleChange}
          placeholder="상품에 대한 설명을 써주세요."
        />
      </FormGroup>

      <FormGroup>
        <p className="label">판매 가격</p>
        <S.InputNum>
          <input name="price" value={formData.price} onChange={handleChange} />
          <p>원</p>
        </S.InputNum>
        <ListPrice list={priceList} />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput>
          <input name="place" onChange={handleChange} placeholder="위치를 입력해주세요." />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListPrice list={placeList} />
      </FormGroup>

      <Button>
        <S.TextSubmit>등록하기</S.TextSubmit>
      </Button>
    </form>
  );
};

export default FormTrade;
