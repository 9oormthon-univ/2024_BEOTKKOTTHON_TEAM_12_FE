import React, { useEffect, useState } from 'react';
import * as S from './style';
import {
  Button,
  ButtonBack,
  Checkbox,
  Header,
  SigninFirstForm,
  SigninSecondForm,
  TagInput,
  TextLabel,
} from 'components/index';
import x from 'assets/icons/x.svg';
import welcomeLogo from 'assets/logo/welcome-logo.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { instance } from 'apis';
import { useSigninFormActions, useSigninFormData } from 'store/signInData';
import { SigninFormData } from 'types/types';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { tab: number } | null;
  //재학생 탭 갔다올 때 location 확인
  const [activeIndex, setActiveIndex] = useState(state?.tab || 0);
  //아이디, 비밀번호, 이메일 유효성 확인
  const [validPassword, setValidPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  //약관 동의 체크박스
  const [allAgreed, setAllAgreed] = useState(false);
  //유효성 확인 후 버튼 색 변경
  const [buttonColor, setButtonColor] = useState({
    $backgroundColor: 'var(--grey-2)',
    color: 'var(--grey-5)',
  });

  const { setSignInFormData } = useSigninFormActions();
  const signinFormData = useSigninFormData();

  const [formData, setFormData] = useState<SigninFormData>({
    userId: '',
    password: '',
    validPassword: '',
    universityName: '',
    universityEmail: '',
    styleTags: [],
  });

  const handleChangeStyleTag = (newStyleTag: string[]) => {
    setFormData({
      ...formData,
      styleTags: newStyleTag,
    });
  };

  /*회원가입 */
  const postSignup = async () => {
    console.log({
      userId: signinFormData.userId,
      password: signinFormData.password,
      universityName: signinFormData.universityName,
      universityEmail: signinFormData.universityEmail,
      styleTags: formData.styleTags,
    });
    const response = await instance.post('/signup', {
      userId: signinFormData.userId,
      password: signinFormData.password,
      universityName: signinFormData.universityName,
      universityEmail: signinFormData.universityEmail,
      styleTags: formData.styleTags,
    });
    console.log(response.data);
  };

  /*입력창 변경시 */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSignInFormData({
      [name]: value,
    });

    if (name === 'universityEmail') {
      const isValid = isValidEmail(value);
      // 이메일 유효성 상태 업데이트
      setEmailValid(isValid);
      if (!isValid) {
        console.log('유효하지 않은 이메일 형식입니다.');
        return; // 유효하지 않으면 여기서 함수 실행을 중단
      }
    }

    if (name === 'validPassword') {
      if (formData.password === event.target.value) {
        setValidPassword(true);
      }
    }
  };

  /*이메일 유효성 체크 */
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /*다음 절차로 이동 */
  const goToNextTab = () => {
    setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : prevIndex));
  };
  /*이전 절차로 이동 */
  const goToPreviousTab = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  /*모든 조건 만족하면 버튼 색 변경 */
  useEffect(() => {
    if (formData.userId && validPassword) {
      setButtonColor({
        $backgroundColor: 'var(--green-primary)',
        color: '#ffffff',
      });
    } else if (emailValid && formData.universityName) {
      setButtonColor({
        $backgroundColor: 'var(--green-primary)',
        color: '#ffffff',
      });
    } else if (allAgreed) {
      setButtonColor({
        $backgroundColor: 'var(--green-primary)',
        color: '#ffffff',
      });
    } else {
      setButtonColor({
        $backgroundColor: 'var(--grey-2)',
        color: 'var(--grey-5)',
      });
    }
  }, [allAgreed, emailValid, formData, validPassword]);

  /*탭 전환  */
  const renderTabContent = () => {
    switch (activeIndex) {
      case 0: // 아이디와 비밀번호 입력 탭
        return (
          <SigninFirstForm
            formData={formData}
            handleInputChange={handleInputChange}
            goToNextTab={goToNextTab}
            validPassword={validPassword}
            buttonColor={buttonColor}
          />
        );
      case 1: // 재학생 인증 탭
        return (
          <SigninSecondForm
            formData={formData}
            handleInputChange={handleInputChange}
            emailValid={emailValid}
            buttonColor={buttonColor}
          />
        );
      case 2: //스타일 태그 선택 탭
        return (
          <>
            <S.Padding30px>
              <TextLabel
                text={'스타일 태그 선택'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
            </S.Padding30px>

            <S.Container>
              <TagInput
                handleChangeStyleTag={handleChangeStyleTag}
                label="스타일 태그 선택"
                setButtonColor={setButtonColor}
              />
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

      case 3: //약관 동의
        return (
          <>
            <S.Padding30px>
              <TextLabel
                text={'약관 동의'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
            </S.Padding30px>
            <S.Container>
              <S.AgreeWrapper>
                <Checkbox
                  label=""
                  id={'allAgree'}
                  checked={allAgreed}
                  setIsChecked={setAllAgreed}
                />
                <S.ColumnWrapper>
                  <label htmlFor="allAgree">
                    <TextLabel
                      text={'모두 동의합니다'}
                      size={14}
                      $weight={700}
                      color={'var(--grey-7)'}
                    />
                    <TextLabel
                      text={
                        '전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, \n개별적으로도 동의를 선택하실 수 있습니다.'
                      }
                      size={12}
                      $weight={400}
                      color={'var(--grey-5)'}
                    />
                  </label>
                </S.ColumnWrapper>
              </S.AgreeWrapper>
              <S.ChecklistColumn>
                <S.CheckItemLarge valid={allAgreed}>(필수) 만 18세 이상입니다.</S.CheckItemLarge>
                <S.CheckItemLarge valid={allAgreed}>
                  (필수) 개인정보 수집 및 이용 동의
                </S.CheckItemLarge>
                <S.CheckItemLarge valid={allAgreed}>(필수) 서비스 이용약관 동의</S.CheckItemLarge>
                <S.CheckItemLarge valid={allAgreed}>
                  (선택) 혜택/이벤트 정보 수신 동의
                </S.CheckItemLarge>
              </S.ChecklistColumn>
              <S.ButtonWrapper>
                <Button
                  handleOnClick={() => {
                    goToNextTab();
                    postSignup();
                  }}
                  children="완료"
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
      case 4: //회원가입 완료
        return (
          <>
            <S.FlexCenter>
              <img src={welcomeLogo} alt="회원가입 완료" />
              <TextLabel
                text={'회원가입이 완료되었습니다'}
                color="var(--green-primary)"
                size={15}
                $weight={500}
                $textAlign="center"
              />
              <S.ButtonWrapper>
                <Button
                  handleOnClick={() => navigate('/login')}
                  children="로그인 하러 가기"
                  width="100%"
                  $padding="16px"
                  fontSize="18px"
                  $bgcolor={'var(--green-primary)'}
                  color={'#ffffff'}
                />
              </S.ButtonWrapper>
            </S.FlexCenter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/*TAB */}
      {activeIndex < 4 && (
        <>
          {' '}
          <Header>
            <ButtonBack className="left" $marginLeft="5px" onClick={goToPreviousTab} />
            <img src={x} className="right" alt="btn-back" onClick={() => navigate('/donation')} />
          </Header>
          <S.Container>
            <S.TabContainer>
              {[...Array(4)].map((_, index) => (
                <S.Dot key={index} active={index === activeIndex} />
              ))}
            </S.TabContainer>
          </S.Container>
        </>
      )}

      {/*TAB 내용 렌더링 */}
      {renderTabContent()}

      {activeIndex < 4 && (
        <S.LoginText>
          이미 회원이신가요?{' '}
          <span onClick={() => navigate('/login')} style={{ color: 'var(--green-primary)' }}>
            로그인하기
          </span>
        </S.LoginText>
      )}
    </>
  );
};

export default SignUp;
