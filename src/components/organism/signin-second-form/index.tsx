import React from 'react';
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
  const { changeSigninFormData, setIsEmailValid } = useSigninFormDataActions();

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSigninFormData('universityEmail', e.target.value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    setIsEmailValid(isValid);
    if (!isValid) {
      console.log('유효하지 않은 이메일 형식입니다.');
      return; // 유효하지 않으면 여기서 함수 실행을 중단
    }
  };

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
          onChange={handleInputEmail}
        />
        {!isEmailValid && <S.PasswordError>유효하지 않은 이메일 형식입니다.</S.PasswordError>}
      </FormGroup>
    </S.Container>
  );
};

export default SigninSecondForm;
