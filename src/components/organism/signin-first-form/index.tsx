import React, { useEffect, useState } from 'react';
import * as S from '../../../pages/auth/signup/style';
import { TextLabel, PasswordInput, Button } from '../../index';

type SigninFirstFormProps = {
  formData: {
    userId: string;
    password: string;
    validPassword: string;
    universityName: string;
    universityEmail: string;
    styleTags: string[];
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goToNextTab: () => void;
  validPassword: boolean;
  buttonColor: { $backgroundColor: string; color: string };
};

const SigninFirstForm: React.FC<SigninFirstFormProps> = ({
  formData,
  handleInputChange,
  goToNextTab,
  validPassword,
  buttonColor,
}) => {
  const [lengthValid, setLengthValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [uppercaseValid, setUppercaseValid] = useState(false);

  /*비밀번호 유효성 체크 */
  useEffect(() => {
    const lengthCheck = formData.password.length >= 8 && formData.password.length <= 16;
    const numberCheck = /\d/.test(formData.password);
    const uppercaseCheck = /[A-Z]/.test(formData.password);

    setLengthValid(lengthCheck);
    setNumberValid(numberCheck);
    setUppercaseValid(uppercaseCheck);
  }, [formData.password]);

  return (
    <>
      <S.Padding30px>
        <TextLabel size={24} $weight={700} color={'var(--grey-7)'}>
          회원가입
        </TextLabel>
      </S.Padding30px>

      <S.Container>
        <S.PasswordInputWrapper>
          <TextLabel size={16} $weight={500} color={'var(--grey-7)'}>
            아이디
          </TextLabel>

          <S.LoginInput
            name="userId"
            type={'text'}
            placeholder="아이디 입력"
            value={formData.userId}
            onChange={handleInputChange}
          />
          <TextLabel size={16} $weight={500} color={'var(--grey-7)'}>
            비밀번호
          </TextLabel>
        </S.PasswordInputWrapper>

        <S.LoginBox>
          <PasswordInput value={formData.password} handleInputChange={handleInputChange} />
        </S.LoginBox>

        <S.PasswordInputWrapper>
          <S.Checklist>
            <S.CheckItem valid={uppercaseValid}>대문자</S.CheckItem>
            <S.CheckItem valid={numberValid}>숫자</S.CheckItem>
            <S.CheckItem valid={lengthValid}>8~16자 이내</S.CheckItem>
          </S.Checklist>
          <TextLabel size={16} $weight={500} color={'var(--grey-7)'}>
            비밀번호 확인
          </TextLabel>

          <S.LoginInput
            name="validPassword"
            placeholder="비밀번호 재입력"
            value={formData.validPassword}
            onChange={handleInputChange}
          />

          {formData.validPassword && (
            <S.PasswordError>
              {validPassword ? '' : '비밀번호가 일치하지 않습니다.'}
            </S.PasswordError>
          )}
        </S.PasswordInputWrapper>
        <S.ButtonWrapper>
          <Button
            handleOnClick={goToNextTab}
            children="다음"
            width="100%"
            $padding="16px"
            fontSize="18px"
            $bgcolor={buttonColor.$backgroundColor}
            color={buttonColor.color}
          />
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default SigninFirstForm;
