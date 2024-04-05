import React from 'react';
import * as S from '../../../pages/auth/signup/style';
import { TextLabel, Button } from '../../index';
import { SigninFormData } from 'types/types';
import { instance } from 'apis';
import { useNavigate } from 'react-router-dom';

type SigninSecondFormProps = {
  formData: SigninFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailValid: boolean;
  buttonColor: { $backgroundColor: string; color: string };
};

const SigninSecondForm: React.FC<SigninSecondFormProps> = ({
  formData,
  handleInputChange,
  emailValid,
  buttonColor,
}) => {
  const navigate = useNavigate();
  /*재학생 인증 */
  const postVerificationEmail = async () => {
    try {
      console.log({
        universityName: formData.universityName,
        email: formData.universityEmail,
      });
      alert('인증번호가 발송되었습니다.');
      navigate('/student-certification');
      const response = await instance.post('/university/certify', {
        universityName: formData.universityName,
        email: formData.universityEmail,
      });

      console.log(response.data);
    } catch (error) {
      console.error('인증번호 발송 실패', error);
    }
  };

  return (
    <>
      <S.Padding30px>
        <TextLabel size={24} $weight={700} color={'var(--grey-7)'}>
          재학생 인증
        </TextLabel>
      </S.Padding30px>
      <S.Container>
        <S.PasswordInputWrapper>
          <TextLabel size={16} $weight={500} color={'var(--grey-7)'}>
            학교 이름
          </TextLabel>

          <S.LoginInput
            name="universityName"
            type={'text'}
            placeholder="동국대학교"
            value={formData.universityName}
            onChange={handleInputChange}
          />

          <TextLabel size={16} $weight={500} color={'var(--grey-7)'}>
            학교 이메일
          </TextLabel>

          <S.LoginInput
            name="universityEmail"
            type={'text'}
            placeholder="honggildong@dgu.ac.kr"
            value={formData.universityEmail}
            onChange={handleInputChange}
          />
          {!emailValid && <S.PasswordError>유효하지 않은 이메일 형식입니다.</S.PasswordError>}
        </S.PasswordInputWrapper>

        <S.ButtonWrapper>
          <Button
            handleOnClick={postVerificationEmail}
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

export default SigninSecondForm;
