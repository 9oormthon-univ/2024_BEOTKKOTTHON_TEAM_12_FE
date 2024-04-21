import React, { useState } from 'react';
import { ContainerProgressForm, FormCompletePage, SigninTab } from 'components/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSigninFormDataActions, useSigninIsDisabled } from 'store/signInData';

const header = ['회원가입', '재학생 인증', '스타일 태그 선택', '약관에 동의해주세요'];

const SignUp: React.FC = () => {
  const location = useLocation();
  const state = location.state as { tab: number } | null;
  const navigate = useNavigate();
  const isDisabled = useSigninIsDisabled();
  const { setIsDisabled, resetSigninFormData } = useSigninFormDataActions();

  //재학생 탭 갔다올 때 location 확인
  const [activeIndex, setActiveIndex] = useState(state?.tab || 0);

  return (
    <>
      {activeIndex === 4 && (
        <FormCompletePage
          english="Welcome!"
          main="회원가입이 완료되었습니다"
          btnText="로그인 하러 가기"
          onClick={() => {
            navigate('/login');
            resetSigninFormData();
          }}
        />
      )}
      {activeIndex < 4 && (
        <>
          <ContainerProgressForm
            totalpage={4}
            page={activeIndex}
            header={header[activeIndex]}
            btn="다음"
            isDisabled={isDisabled}
            onClickBtnBack={() => {
              setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
              setIsDisabled(true);
            }}
            onClickBtn={() => {
              setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : prevIndex));
              setIsDisabled(true);
            }}
          >
            <SigninTab activeIndex={activeIndex} />
          </ContainerProgressForm>
        </>
      )}
    </>
  );
};

export default SignUp;
