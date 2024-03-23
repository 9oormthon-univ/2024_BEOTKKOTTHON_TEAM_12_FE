import { BoxInput } from "components/index";
import * as S from "./style";
import { useDonationForm, useDonationFormActions } from "store/donationForm";
import { Dispatch, SetStateAction, useEffect } from "react";

interface FormDonationRequestProps {
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

const FormDonationRequest = ({ setIsDisabled }: FormDonationRequestProps) => {
  const formData = useDonationForm();
  const { setFormData } = useDonationFormActions();

  useEffect(() => {
    if (
      formData.sort !== "" &&
      (formData.clothes_num !== 0 || formData.goods_num !== 0) &&
      formData.box_num !== 0
    ) {
      setIsDisabled(false);
    }
  }, [formData]);

  return (
    <S.Container>
      <div>
        <S.Label htmlFor="sort">기부 물품 종류</S.Label>
        <BoxInput>
          <input
            id="sort"
            name="sort"
            value={formData.sort}
            onChange={(e) => setFormData("sort", e.target.value)}
            placeholder="예) 옷, 가방, 신발"
          />
        </BoxInput>
      </div>

      <div>
        <S.Label htmlFor="clothes_num">기부 물품 수량</S.Label>
        <S.Sort>의류</S.Sort>
        <S.InputNum className="num">
          <input
            type=""
            id="clothes_num"
            name="clothes_num"
            value={formData.clothes_num === 0 ? "" : formData.clothes_num}
            onChange={(e) => setFormData("clothes_num", e.target.value)}
            placeholder="0"
          />
          <p>개</p>
        </S.InputNum>

        <S.Sort htmlFor="goods_num">잡화</S.Sort>
        <S.InputNum>
          <input
            id="goods_num"
            name="goods_num"
            value={formData.goods_num === 0 ? "" : formData.goods_num}
            onChange={(e) => setFormData("goods_num", e.target.value)}
            placeholder="0"
          />
          <p>개</p>
        </S.InputNum>
      </div>

      <div className="box-num">
        <S.Label htmlFor="box_num">박스 수량</S.Label>
        <S.FlexInput className="box-num-items">
          <div
            className="btn"
            onClick={() => setFormData("box_num", formData.box_num - 1)}
          >
            -
          </div>
          <BoxInput className="grow">
            <input
              type="number"
              id="box_num"
              name="box_num"
              value={formData.box_num}
              onChange={(e) => setFormData("box_num", e.target.value)}
            />
          </BoxInput>
          <div
            className="btn"
            onClick={() => setFormData("box_num", formData.box_num + 1)}
          >
            +
          </div>
        </S.FlexInput>
      </div>
    </S.Container>
  );
};

export default FormDonationRequest;
