import * as S from './style';
import { useProductFormData, useFormDataActions } from 'store/productFormData';

const FormRadio = () => {
  const formData = useProductFormData();
  const { changeProductFormData } = useFormDataActions();

  return (
    <S.Container>
      <S.Group>
        <input
          type="radio"
          id="very-good"
          name="product_status"
          value="very-good"
          checked={formData.product_status === '아주 좋아요'}
          onChange={() => changeProductFormData('product_status', '아주 좋아요')}
        />
        <label htmlFor="very-good">아주 좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="good"
          name="product_status"
          value="good"
          checked={formData.product_status === '좋아요'}
          onChange={() => changeProductFormData('product_status', '좋아요')}
        />
        <label htmlFor="good">좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="normal"
          name="product_status"
          value="normal"
          checked={formData.product_status === '보통이에요'}
          onChange={() => changeProductFormData('product_status', '보통이에요')}
        />
        <label htmlFor="normal">보통이에요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="used"
          name="product_status"
          value="used"
          checked={formData.product_status === '사용감 있어요'}
          onChange={() => changeProductFormData('product_status', '사용감 있어요')}
        />
        <label htmlFor="used">사용감 있어요</label>
      </S.Group>
    </S.Container>
  );
};

export default FormRadio;
