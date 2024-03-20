import { BoxInput, Button } from '@components/index';
import * as S from './style';
import { useDonationForm, useDonationFormActions } from 'src/store/donationForm';
import { useRef } from 'react';

const FormDonationBasic = () => {
  const formData = useDonationForm();
  const { setFormData } = useDonationFormActions();
  const addr2Ref = useRef<HTMLInputElement>(null);

  return (
    <S.Container>
      <div>
        <S.Label htmlFor="name">이름</S.Label>
        <BoxInput>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData('name', e.target.value)}
            placeholder="이름을 입력해주세요."
          />
        </BoxInput>
      </div>

      <div>
        <S.Label htmlFor="addr1">방문 주소</S.Label>
        <S.FlexInput>
          <BoxInput className="grow">
            <input
              id="addr1"
              name="addr1"
              value={formData.addr1}
              onChange={(e) => setFormData('addr1', e.target.value)}
            />
          </BoxInput>
          <Button
            width="82px"
            padding="10px 17px"
            color="var(--grey-1)"
            $bgcolor="var(--grey-4)"
            fontSize="16px"
            handleOnClick={() => {
              if (addr2Ref.current) addr2Ref.current.focus();
            }}
          >
            검색
          </Button>
        </S.FlexInput>
        <BoxInput>
          <input
            ref={addr2Ref}
            id="addr2"
            name="addr2"
            value={formData.addr2}
            onChange={(e) => setFormData('addr2', e.target.value)}
            placeholder="상세 주소 입력"
          />
        </BoxInput>
      </div>

      <div>
        <S.Label htmlFor="phone">휴대전화</S.Label>
        <S.FlexInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              pattern="\d*"
              size={4}
              maxLength={3}
              id="phone1"
              name="phone1"
              value={formData.phone1}
              onChange={(e) => setFormData('phone1', e.target.value)}
            />
          </BoxInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              pattern="\d*"
              size={4}
              maxLength={4}
              id="phone2"
              name="phone2"
              value={formData.phone2}
              onChange={(e) => setFormData('phone2', e.target.value)}
            />
          </BoxInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              pattern="\d*"
              size={4}
              maxLength={4}
              id="phone3"
              name="phone3"
              value={formData.phone3}
              onChange={(e) => setFormData('phone3', e.target.value)}
            />
          </BoxInput>
        </S.FlexInput>
      </div>
      <div>
        <S.Label htmlFor="email1">이메일 주소</S.Label>
        <S.FlexInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              id="email1"
              name="email1"
              value={formData.email1}
              onChange={(e) => setFormData('email1', e.target.value)}
            />
          </BoxInput>
          <span>@</span>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              id="email2"
              name="email2"
              value={formData.email2}
              onChange={(e) => setFormData('email2', e.target.value)}
            />
          </BoxInput>
        </S.FlexInput>
      </div>
    </S.Container>
  );
};

export default FormDonationBasic;
