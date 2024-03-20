import { BoxInput } from '@components/index';
import * as S from './style';
import { useDonationForm, useDonationFormActions } from 'src/store/donationForm';

const FormDonationRequest = () => {
  const formData = useDonationForm();
  const { setFormData } = useDonationFormActions();

  return (
    <S.Container>
      <div>
        <S.Label htmlFor="sort">기부 물품 종류</S.Label>
        <BoxInput>
          <input
            id="sort"
            name="sort"
            value={formData.sort}
            onChange={(e) => setFormData('sort', e.target.value)}
            placeholder="예) 옷, 가방, 신발"
          />
        </BoxInput>
      </div>

      <div>
        <S.Label htmlFor="clothes_num">기부 물품 수량</S.Label>
        <S.Sort>의류</S.Sort>
        <S.InputNum className="num">
          <input
            id="clothes_num"
            name="clothes_num"
            value={formData.clothes_num}
            onChange={(e) => setFormData('clothes_num', e.target.value)}
          />
          <p>개</p>
        </S.InputNum>

        <S.Sort htmlFor="goods_num">잡화</S.Sort>
        <S.InputNum>
          <input
            id="goods_num"
            name="goods_num"
            value={formData.goods_num}
            onChange={(e) => setFormData('goods_num', e.target.value)}
          />
          <p>개</p>
        </S.InputNum>
      </div>

      <div className="box-num">
        <S.Label htmlFor="box_num">박스 수량</S.Label>
        <S.FlexInput className="box-num-items">
          <div className="btn" onClick={() => setFormData('box_num', formData.box_num - 1)}>
            -
          </div>
          <BoxInput className="grow">
            <input
              type="number"
              id="box_num"
              name="box_num"
              value={formData.box_num}
              onChange={(e) => setFormData('box_num', e.target.value)}
            />
          </BoxInput>
          <div className="btn" onClick={() => setFormData('box_num', formData.box_num + 1)}>
            +
          </div>
        </S.FlexInput>
      </div>
    </S.Container>
  );
};

export default FormDonationRequest;
