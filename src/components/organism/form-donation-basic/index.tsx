import { BoxInput, Button } from '@components/index';
import * as S from './style';
import { useState } from 'react';

interface FormDataType {
  name: string;
  addr: string;
  phone: string;
  email: string;
}

const FormDonationBasic = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    addr: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <S.ContainerForm>
      <div>
        <S.Label htmlFor="name">이름</S.Label>
        <BoxInput>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요."
          />
        </BoxInput>
      </div>

      <div>
        <S.Label htmlFor="addr">방문 주소</S.Label>
        <S.FlexInput>
          <BoxInput className="grow">
            <input id="addr" name="addr" value={formData.addr} onChange={handleChange} />
          </BoxInput>
          <Button
            width="82px"
            padding="10px 17px"
            color="var(--grey-1)"
            $bgcolor="var(--grey-4)"
            fontSize="16px"
          >
            검색
          </Button>
        </S.FlexInput>
        <BoxInput>
          <input
            id="addr"
            name="addr"
            value={formData.addr}
            onChange={handleChange}
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
              id="phone1"
              size={4}
              maxLength={3}
            />
          </BoxInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              pattern="\d*"
              id="phone2"
              size={4}
              maxLength={4}
            />
          </BoxInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              pattern="\d*"
              id="phone3"
              size={4}
              maxLength={4}
            />
          </BoxInput>
        </S.FlexInput>
      </div>
      <div>
        <S.Label htmlFor="email">이메일 주소</S.Label>
        <S.FlexInput>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
          </BoxInput>
          <span>@</span>
          <BoxInput>
            <input
              type="text"
              className="flex-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
          </BoxInput>
        </S.FlexInput>
      </div>
    </S.ContainerForm>
  );
};

export default FormDonationBasic;
