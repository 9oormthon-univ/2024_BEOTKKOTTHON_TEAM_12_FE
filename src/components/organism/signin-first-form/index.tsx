import React, { useEffect, useState } from 'react';
import * as S from './style';
import { PasswordInput, FormGroup, BoxInput } from '../../index';
import {
  useSigninFormData,
  useSigninFormDataActions,
  useSigninIsValidPassword,
} from 'store/signInData';

const SigninFirstForm = () => {
  const signinFormData = useSigninFormData();
  const isValidPassword = useSigninIsValidPassword();
  const { changeSigninFormData, setIsValidPassword } = useSigninFormDataActions();
  const [lengthValid, setLengthValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [uppercaseValid, setUppercaseValid] = useState(false);

  /*비밀번호 유효성 체크 */
  useEffect(() => {
    const lengthCheck = signinFormData.password.length >= 8 && signinFormData.password.length <= 16;
    const numberCheck = /\d/.test(signinFormData.password);
    const uppercaseCheck = /[A-Z]/.test(signinFormData.password);

    setLengthValid(lengthCheck);
    setNumberValid(numberCheck);
    setUppercaseValid(uppercaseCheck);
  }, [signinFormData.password]);

  return (
    <S.Container>
      <FormGroup>
        <p className="label">아이디</p>
        <BoxInput
          name="userId"
          type={'text'}
          placeholder="아이디 입력"
          value={signinFormData.userId}
          onChange={(e: any) => changeSigninFormData('userId', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">비밀번호</p>
        <PasswordInput
          value={signinFormData.password}
          handleInputChange={(e: any) => changeSigninFormData('password', e.target.value)}
        />

        <S.Checklist>
          <S.CheckItem valid={uppercaseValid}>대문자</S.CheckItem>
          <S.CheckItem valid={numberValid}>숫자</S.CheckItem>
          <S.CheckItem valid={lengthValid}>8~16자 이내</S.CheckItem>
        </S.Checklist>
      </FormGroup>

      <FormGroup>
        <p className="label">비밀번호 확인</p>

        <BoxInput
          name="validPassword"
          placeholder="비밀번호 재입력"
          value={signinFormData.validPassword}
          onChange={(e: any) => {
            changeSigninFormData('validPassword', e.target.value);
            signinFormData.password === e.target.value
              ? setIsValidPassword(true)
              : setIsValidPassword(false);
          }}
        />

        {signinFormData.validPassword && (
          <S.PasswordError>
            {isValidPassword ? '' : '비밀번호가 일치하지 않습니다.'}
          </S.PasswordError>
        )}
      </FormGroup>
    </S.Container>
  );
};

export default SigninFirstForm;
