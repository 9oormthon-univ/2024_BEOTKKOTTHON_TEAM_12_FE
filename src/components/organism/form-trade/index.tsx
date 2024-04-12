import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
} from 'components/index';
import * as S from './style';
import { placeList, priceList } from 'data/shared';
import Button from 'components/atom/button-trade';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { useFormData, useFormDataActions, useShowImages } from 'store/formData';
import { TradeFormData } from 'types/types';

interface FormTradeProps {
  handleSubmitAction: (sendData: TradeFormData) => void;
  btnText: string;
}

const FormTrade = ({ handleSubmitAction, btnText }: FormTradeProps) => {
  const formData = useFormData();
  const navigate = useNavigate();
  const showImages = useShowImages();
  const { setFormData, resetFormData } = useFormDataActions();

  const disabled = !(
    formData.product_name &&
    formData.category_name &&
    formData.product_status &&
    formData.product_content &&
    formData.price &&
    formData.place
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    handleSubmitAction({
      product_image: formData.product_image,
      product_name: formData.product_name,
      category_name: formData.category_name,
      product_status: formData.product_status,
      product_content: formData.product_content,
      price: formData.price,
      place: formData.place,
    });

    navigate(-1);
    resetFormData();
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
            name="product_name"
            value={formData.product_name}
            onChange={(e) => setFormData('product_name', e.target.value)}
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
        <FormRadio />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 설명</p>
        <S.TextArea
          name="product_content"
          value={formData.product_content}
          placeholder="상품에 대한 설명을 써주세요."
          onChange={(e) => setFormData('product_content', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">판매 가격</p>
        <S.InputNum>
          <input
            name="price"
            value={transformPrice(formData.price as number)}
            onChange={(e) => setFormData('price', Number(e.target.value.replace(/,/g, '')))}
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
            placeholder="위치를 입력해주세요."
            onChange={(e) => setFormData('place', e.target.value)}
          />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm list={placeList} type={'place'} />
      </FormGroup>

      <Button color={disabled ? '' : 'primary'} disabled={disabled}>
        {btnText}
      </Button>
    </form>
  );
};

export default FormTrade;
