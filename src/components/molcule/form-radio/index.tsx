import { ChangeEvent } from 'react';
import * as S from './style';
import { useFormData } from 'src/store/formData';

interface FormRadioType {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormRadio = ({ handleChange }: FormRadioType) => {
  const formData = useFormData();

  return (
    <S.Container>
      <S.Group>
        <input
          type="radio"
          id="very-good"
          name="state"
          onChange={handleChange}
          value="very-good"
          checked={formData.state === '아주 좋아요'}
        />
        <label htmlFor="very-good">아주 좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="good"
          name="state"
          onChange={handleChange}
          value="good"
          checked={formData.state === '좋아요'}
        />
        <label htmlFor="good">좋아요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="normal"
          name="state"
          onChange={handleChange}
          value="normal"
          checked={formData.state === '보통이에요'}
        />
        <label htmlFor="normal">보통이에요</label>
      </S.Group>

      <S.Group>
        <input
          type="radio"
          id="used"
          name="state"
          onChange={handleChange}
          value="used"
          checked={formData.state === '사용감 있어요'}
        />
        <label htmlFor="used">사용감 있어요</label>
      </S.Group>
    </S.Container>
  );
};

export default FormRadio;
