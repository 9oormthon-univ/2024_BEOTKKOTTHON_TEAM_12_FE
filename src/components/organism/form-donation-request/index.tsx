import { BoxInput, FormGroup } from 'components/index';
import * as S from './style';
import { useDonationForm, useDonationFormActions } from 'store/donationForm';
import { useEffect } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const FormDonationRequest = () => {
  const formData = useDonationForm();
  const { setIsDisabled } = useDonationFormActions();
  const { setFormData } = useDonationFormActions();

  useEffect(() => {
    if (
      formData.sort !== '' &&
      (formData.clothes_num !== 0 || formData.goods_num !== 0) &&
      formData.box_num !== 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formData]);

  return (
    <S.Container>
      <FormGroup>
        <p className="label">기부 물품 종류</p>
        <BoxInput
          id="sort"
          name="sort"
          value={formData.sort}
          onChange={(e: any) => setFormData('sort', e.target.value)}
          placeholder="예) 옷, 가방, 신발"
        />
      </FormGroup>

      <FormGroup>
        <p className="label">기부 물품 수량</p>

        <S.CheckboxWrapper>
          <div className="checkbox">
            <input id="clothes_num" type="checkbox" />
            <label htmlFor="clothes_num">의류</label>
          </div>
          <BoxInput
            id="clothes_num"
            name="clothes_num"
            $width="164px"
            size="9"
            value={formData.clothes_num === 0 ? '' : formData.clothes_num}
            onChange={(e: any) => setFormData('clothes_num', e.target.value)}
          >
            <p className="sub-placeholder">개</p>
          </BoxInput>
        </S.CheckboxWrapper>

        <S.CheckboxWrapper>
          <div className="checkbox">
            <input id="clothes_num" type="checkbox" />
            <label htmlFor="clothes_num">잡화</label>
          </div>
          <BoxInput
            id="goods_num"
            name="goods_num"
            $width="164px"
            size="9"
            value={formData.goods_num === 0 ? '' : formData.goods_num}
            onChange={(e: any) => setFormData('goods_num', e.target.value)}
          >
            <p className="sub-placeholder">개</p>
          </BoxInput>
        </S.CheckboxWrapper>
      </FormGroup>

      <FormGroup className="box-num">
        <p className="label">박스 수량</p>
        <S.FlexInput className="box-num-items">
          <FaMinusCircle onClick={() => setFormData('box_num', formData.box_num - 1)} />
          <BoxInput
            type="number"
            id="box_num"
            name="box_num"
            value={formData.box_num}
            onChange={(e: any) => setFormData('box_num', e.target.value)}
          />
          <FaPlusCircle onClick={() => setFormData('box_num', formData.box_num + 1)} />
        </S.FlexInput>
      </FormGroup>
    </S.Container>
  );
};

export default FormDonationRequest;
