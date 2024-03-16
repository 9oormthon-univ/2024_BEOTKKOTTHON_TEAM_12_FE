import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
} from '@components/index';
import * as S from './style';
import { placeList, priceList, salesData } from 'src/data/shared';
import Button from '@components/atom/button-trade';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { transformPrice } from 'src/utils/transformPrice';
import { useFormData, useFormDataActions, useShowImages } from 'src/store/formData';
import { useEffect } from 'react';

const FormTrade = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const formData = useFormData();
  const showImages = useShowImages();
  const { setFormData, receiveData } = useFormDataActions();

  useEffect(() => {
    if (location.pathname.includes('edit')) {
      // edit 페이지
      // 서버에서 데이터 받아와서 receivedData에 저장
      receiveData(salesData[Number(id) - 1]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | null>) => {
    const { name, value } = e.target;

    if (name === 'price') {
      setFormData('price', Number(value.replace(/,/g, '')));
    } else {
      setFormData(name, value);
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
        <ListImage />
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="제목을 입력해주세요."
          />
        </BoxInput>
      </FormGroup>

      <FormGroup>
        <p className="label">분류</p>
        <ListTag isform={true} />
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
        <ListTradeForm list={priceList} type={'price'} />
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
        <ListTradeForm list={placeList} type={'place'} />
      </FormGroup>

      <Button>등록하기</Button>
    </form>
  );
};

export default FormTrade;
