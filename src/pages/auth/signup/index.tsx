import React, { useState } from 'react';
import { ContainerProgressForm, SigninFinish, SigninTab } from 'components/index';
import { useLocation } from 'react-router-dom';
import { useSigninFormDataActions, useSigninIsDisabled } from 'store/signInData';

const header = ['회원가입', '재학생 인증', '스타일 태그 선택', '약관에 동의해주세요'];

const SignUp: React.FC = () => {
  const location = useLocation();
  const state = location.state as { tab: number } | null;
  const isDisabled = useSigninIsDisabled();
  const { setIsDisabled } = useSigninFormDataActions();

  //재학생 탭 갔다올 때 location 확인
  const [activeIndex, setActiveIndex] = useState(state?.tab || 0);

  return (
    <>
      {activeIndex === 4 && <SigninFinish />}
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
