import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
} from '@components/index';
import * as S from './style';
import { useState } from 'react';
import { placeList, priceList } from 'src/data/shared';
import Button from '@components/atom/button-trade';
import { SaleItem } from 'src/types/types';

const FormTrade = () => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<SaleItem>({
    id: 0,
    name: '',
    imgs: {} as FileList,
    category: '',
    time: '',
    state: '',
    price: '',
    sold: '판매 중',
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
        <ListImage showImages={showImages} handleChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input name="name" onChange={handleChange} placeholder="제목을 입력해주세요." />
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
        <ListTradeForm list={priceList} />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput>
          <input name="place" onChange={handleChange} placeholder="위치를 입력해주세요." />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm list={placeList} />
      </FormGroup>

      <Button>등록하기</Button>
    </form>
  );
};

export default FormTrade;
