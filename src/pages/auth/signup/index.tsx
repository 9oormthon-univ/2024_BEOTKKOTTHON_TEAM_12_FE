import React, { useState } from 'react';
import * as S from './style';
import { ContainerProgressForm, SigninFinish, SigninTab } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const header = ['회원가입', '재학생 인증', '스타일 태그 선택', '약관에 동의해주세요'];

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { tab: number } | null;

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
            onClickBtnBack={() =>
              setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
            }
            onClickBtn={() =>
              setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : prevIndex))
            }
          >
            <SigninTab activeIndex={activeIndex} />
          </ContainerProgressForm>
        </>
      )}
    </>
  );
};

export default SignUp;
