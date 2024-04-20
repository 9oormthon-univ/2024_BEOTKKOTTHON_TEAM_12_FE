import React, { useEffect } from 'react';
import * as S from './style';
import { FormGroup, BoxInput } from '../../index';
import {
  useSigninFormData,
  useSigninFormDataActions,
  useSigninIsEmailValid,
} from 'store/signInData';

const SigninSecondForm = () => {
  const singinFormData = useSigninFormData();
  const isEmailValid = useSigninIsEmailValid();
  const { changeSigninFormData, setIsEmailValid, setIsDisabled } = useSigninFormDataActions();

  useEffect(() => {
    if (singinFormData.universityName && singinFormData.universityEmail && isEmailValid)
      setIsDisabled(false);
    else setIsDisabled(true);
  }, [singinFormData.universityName, singinFormData.universityEmail, isEmailValid]);

  return (
    <S.Container>
      <FormGroup>
        <p className="label">학교 이름</p>
        <BoxInput
          name="universityName"
          type={'text'}
          placeholder="동국대학교"
          value={singinFormData.universityName}
          onChange={(e: any) => changeSigninFormData('universityName', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">학교 이메일</p>
        <BoxInput
          name="universityEmail"
          type={'text'}
          placeholder="honggildong@dgu.ac.kr"
          value={singinFormData.universityEmail}
          onChange={(e: any) => {
            changeSigninFormData('universityEmail', e.target.value);
            setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
          }}
        />
        {!isEmailValid && <S.PasswordError>유효하지 않은 이메일 형식입니다.</S.PasswordError>}
      </FormGroup>
    </S.Container>
  );
};

export default SigninSecondForm;
