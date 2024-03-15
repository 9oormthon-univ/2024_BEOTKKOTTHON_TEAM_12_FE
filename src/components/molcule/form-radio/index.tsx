import { ChangeEvent } from 'react';
import * as S from './style';

interface FormRadioType {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormRadio = ({ handleChange }: FormRadioType) => {
  return (
    <S.Container>
      <S.Group>
        <input type="radio" id="very-good" name="state" onChange={handleChange} value="very-good" />
        <label htmlFor="very-good">아주 좋아요</label>
      </S.Group>

      <S.Group>
        <input type="radio" id="good" name="state" onChange={handleChange} value="good" />
        <label htmlFor="good">좋아요</label>
      </S.Group>

      <S.Group>
        <input type="radio" id="normal" name="state" onChange={handleChange} value="normal" />
        <label htmlFor="normal">보통이에요</label>
      </S.Group>

      <S.Group>
        <input type="radio" id="used" name="state" onChange={handleChange} value="used" />
        <label htmlFor="used">사용감 있어요</label>
      </S.Group>
    </S.Container>
  );
};

export default FormRadio;
