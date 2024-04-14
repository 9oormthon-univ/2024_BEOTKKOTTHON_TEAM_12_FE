import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
  Loading,
  BoxError,
} from 'components/index';
import * as S from './style';
import { placeList, priceList } from 'data/shared';
import Button from 'components/atom/button-trade';
import { useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { useProductFormData, useFormDataActions, useShowImages } from 'store/productFormData';
import { ProductFormDataType } from 'types/productType';
import { checkIsFormValid } from 'utils/checkIsFormValid';

interface FormTradeProps {
  handleSubmitAction: (sendData: ProductFormDataType) => void;
  btnText: string;
  status?: string;
}

const FormTrade = ({ handleSubmitAction, btnText, status }: FormTradeProps) => {
  const navigate = useNavigate();
  const productFormData = useProductFormData();
  const showImages = useShowImages();
  const isDisabled = checkIsFormValid();
  const { changeProductFormData, resetProductFormData } = useFormDataActions();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitAction(productFormData);
    navigate(-1);
    resetProductFormData();
  };

  if (status && status === 'pending')
    return <Loading $height="calc(100svh - var(--header-size))" />;

  if (status && status === 'error')
    return (
      <BoxError $height="calc(100svh - var(--header-size))">상품을 수정할 수 없습니다.</BoxError>
    );

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <FormGroup $imglen={showImages.length}>
        <p className="label">
          이미지 업로드 (<span className="sub">{showImages.length}</span>/5)
        </p>
        <ListImage />
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput
          name="product_name"
          value={productFormData.product_name}
          onChange={(e: any) => changeProductFormData('product_name', e.target.value)}
          placeholder="제목을 입력해주세요."
        />
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
          value={productFormData.product_content}
          placeholder="상품에 대한 설명을 써주세요."
          onChange={(e) => changeProductFormData('product_content', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">판매 가격</p>
        <BoxInput
          $width="164px"
          size="9"
          name="price"
          value={transformPrice(productFormData.price as number)}
          onChange={(e: any) =>
            changeProductFormData('price', Number(e.target.value.replace(/,/g, '')))
          }
        >
          <p className="sub-placeholder">원</p>
        </BoxInput>
        <ListTradeForm list={priceList} type={'price'} />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput
          name="place"
          value={productFormData.place}
          placeholder="위치를 입력해주세요."
          onChange={(e: any) => changeProductFormData('place', e.target.value)}
        />
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm list={placeList} type={'place'} />
      </FormGroup>

      <Button color={isDisabled ? '' : 'primary'} disabled={isDisabled}>
        {btnText}
      </Button>
    </S.FormContainer>
  );
};

export default FormTrade;
