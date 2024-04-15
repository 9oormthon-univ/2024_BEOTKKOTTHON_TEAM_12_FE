import { BoxInput, Button } from 'components/index';
import * as S from './style';
import { useDonationForm, useDonationFormActions } from 'store/donationForm';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface FormDonationBasicProps {
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
}

const FormDonationBasic = ({ setIsDisabled }: FormDonationBasicProps) => {
  const formData = useDonationForm();
  const { setFormData } = useDonationFormActions();
  const addr2Ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      formData.name !== '' &&
      formData.addr1 !== '' &&
      formData.addr2 !== '' &&
      formData.phone1 !== '' &&
      formData.phone2 !== '' &&
      formData.phone3 !== '' &&
      formData.email1 !== '' &&
      formData.email2 !== ''
    ) {
      setIsDisabled(false);
    }
  }, [formData]);

  return (
    <S.Container>
      <div>
        <S.Label htmlFor="name">이름</S.Label>
        <BoxInput
          id="name"
          name="name"
          value={formData.name}
          onChange={(e: any) => setFormData('name', e.target.value)}
          placeholder="이름을 입력해주세요."
        />
      </div>

      <div>
        <S.Label htmlFor="addr1">방문 주소</S.Label>
        <S.FlexInput>
          <BoxInput
            className="grow"
            id="addr1"
            name="addr1"
            value={formData.addr1}
            onChange={(e: any) => setFormData('addr1', e.target.value)}
          />
          <Button
            width="82px"
            $padding="10px 17px"
            color="var(--grey-1)"
            $bgcolor="var(--grey-4)"
            fontSize="16px"
            handleOnClick={() => {
              setFormData('addr1', '서울시 행복구 소망동');
              setFormData('addr2', '104동 1004호');
            }}
          >
            검색
          </Button>
        </S.FlexInput>
        <BoxInput
          ref={addr2Ref}
          id="addr2"
          name="addr2"
          value={formData.addr2}
          onChange={(e: any) => setFormData('addr2', e.target.value)}
          placeholder="상세 주소 입력"
        />
      </div>

      <div>
        <S.Label htmlFor="phone1">휴대전화</S.Label>
        <S.FlexInput>
          <BoxInput
            type="text"
            className="flex-input"
            pattern="\d*"
            size={4}
            maxLength={3}
            id="phone1"
            name="phone1"
            value={formData.phone1}
            onChange={(e: any) => setFormData('phone1', e.target.value)}
          />
          -
          <BoxInput
            type="text"
            className="flex-input"
            pattern="\d*"
            size={4}
            maxLength={4}
            id="phone2"
            name="phone2"
            value={formData.phone2}
            onChange={(e: any) => setFormData('phone2', e.target.value)}
          />
          -
          <BoxInput
            type="text"
            className="flex-input"
            pattern="\d*"
            size={4}
            maxLength={4}
            id="phone3"
            name="phone3"
            value={formData.phone3}
            onChange={(e: any) => setFormData('phone3', e.target.value)}
          />
        </S.FlexInput>
      </div>
      <div>
        <S.Label htmlFor="email1">이메일 주소</S.Label>
        <S.FlexInput>
          <BoxInput
            type="text"
            className="flex-input"
            id="email1"
            name="email1"
            value={formData.email1}
            onChange={(e: any) => setFormData('email1', e.target.value)}
          />
          <span>@</span>
          <BoxInput
            type="text"
            className="flex-input"
            id="email2"
            name="email2"
            value={formData.email2}
            onChange={(e: any) => setFormData('email2', e.target.value)}
          />
        </S.FlexInput>
      </div>
    </S.Container>
  );
};

export default FormDonationBasic;
