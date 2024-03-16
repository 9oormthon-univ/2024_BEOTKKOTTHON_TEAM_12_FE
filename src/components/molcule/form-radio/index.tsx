import * as S from './style';
import { useFormData, useFormDataActions } from 'src/store/formData';

const FormRadio = () => {
  const formData = useFormData();
  const { setFormData } = useFormDataActions();

  return (
    <S.Container>
      <S.Group>
        <input
          type="radio"
          id="very-good"
          name="state"
          value="very-good"
          checked={formData.state === '아주 좋아요'}
          onChange={() => setFormData('state', '아주 좋아요')}
        />
        <label htmlFor="very-good">아주 좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="good"
          name="state"
          value="good"
          checked={formData.state === '좋아요'}
          onChange={() => setFormData('state', '좋아요')}
        />
        <label htmlFor="good">좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="normal"
          name="state"
          value="normal"
          checked={formData.state === '보통이에요'}
          onChange={() => setFormData('state', '보통이에요')}
        />
        <label htmlFor="normal">보통이에요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="used"
          name="state"
          value="used"
          checked={formData.state === '사용감 있어요'}
          onChange={() => setFormData('state', '사용감 있어요')}
        />
        <label htmlFor="used">사용감 있어요</label>
      </S.Group>
    </S.Container>
  );
};

export default FormRadio;
