import * as S from './style';
import { PasswordInput, FormGroup, BoxInput } from '../../index';
import {
  useSigninFormData,
  useSigninFormDataActions,
  useSigninIsValidPassword,
} from 'store/signInData';
import { useEffect } from 'react';

const SigninFirstForm = () => {
  const signinFormData = useSigninFormData();
  const isValidPassword = useSigninIsValidPassword();
  const { changeSigninFormData, setIsValidPassword, setIsDisabled } = useSigninFormDataActions();

  /*비밀번호 유효성 체크 */
  const lengthValid = signinFormData.password.length >= 8 && signinFormData.password.length <= 16;
  const numberValid = /\d/.test(signinFormData.password);
  const uppercaseValid = /[A-Z]/.test(signinFormData.password);

  useEffect(() => {
    if (
      signinFormData.userId &&
      signinFormData.password &&
      signinFormData.validPassword &&
      isValidPassword &&
      lengthValid &&
      numberValid &&
      uppercaseValid
    )
      setIsDisabled(false);
    else setIsDisabled(true);
  }, [signinFormData, lengthValid, numberValid, uppercaseValid, isValidPassword]);

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
          handleInputChange={(e: any) => {
            changeSigninFormData('password', e.target.value);
            signinFormData.password === e.target.value
              ? setIsValidPassword(true)
              : setIsValidPassword(false);
          }}
        />

        <S.Checklist>
          <S.CheckItem $valid={uppercaseValid}>대문자</S.CheckItem>
          <S.CheckItem $valid={numberValid}>숫자</S.CheckItem>
          <S.CheckItem $valid={lengthValid}>8~16자 이내</S.CheckItem>
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

        {!isValidPassword && signinFormData.validPassword && (
          <S.PasswordError>비밀번호가 일치하지 않습니다.</S.PasswordError>
        )}
      </FormGroup>
    </S.Container>
  );
};

export default SigninFirstForm;
