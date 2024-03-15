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
import { Product } from 'src/types/types';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'src/utils/transformPrice';

const FormTrade = () => {
  const navigate = useNavigate();
  const [showImages, setShowImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<Product>({
    id: '0',
    name: '',
    imgs: {} as FileList,
    category: '',
    time: '',
    state: '',
    price: 0,
    sold: '판매중',
    place: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | null>) => {
    const { name, value } = e.target;

    if (name === 'price') {
      setFormData({
        ...formData,
        price: Number(value.replace(/,/g, '')),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup $imglen={showImages.length}>
        <p className="label">
          이미지 업로드 (<span className="sub">{showImages.length}</span>/5)
        </p>
        <ListImage
          showImages={showImages}
          setShowImages={setShowImages}
          formData={formData}
          setFormData={setFormData}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input name="name" onChange={handleChange} placeholder="제목을 입력해주세요." />
        </BoxInput>
      </FormGroup>

      <FormGroup>
        <p className="label">분류</p>
        <ListTag formData={formData} setFormData={setFormData} isform={true} />
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
          <input
            name="price"
            value={transformPrice(formData.price as number)}
            onChange={handleChange}
          />
          <p>원</p>
        </S.InputNum>
        <ListTradeForm
          formData={formData}
          setFormData={setFormData}
          list={priceList}
          type={'price'}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput>
          <input
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="위치를 입력해주세요."
          />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm
          formData={formData}
          setFormData={setFormData}
          list={placeList}
          type={'place'}
        />
      </FormGroup>

      <Button>등록하기</Button>
    </form>
  );
};

export default FormTrade;
