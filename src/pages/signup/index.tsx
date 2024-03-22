import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Button, Checkbox, Header, TagInput, TextLabel } from '@components/index';
import arrow from '@assets/icons/arrow.svg';
import x from '@assets/icons/x.svg';
import eyeOff from '@assets/icons/eye-off.svg';
import welcomeLogo from '@assets/logo/welcome-logo.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { instance } from 'src/apis';

interface FormData {
  userId: string;
  password: string;
  validPassword: string;
  universityName: string;
  universityEmail: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { tab: number } | null;
  //재학생 탭 갔다올 때 location 확인
  const [activeIndex, setActiveIndex] = useState(state?.tab || 0);
  //아이디, 비밀번호, 이메일 유효성 확인
  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [lengthValid, setLengthValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [uppercaseValid, setUppercaseValid] = useState(false);
  //약관 동의 체크박스
  const [allAgreed, setAllAgreed] = useState(false);
  //유효성 확인 후 버튼 색 변경
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: 'var(--grey-2)',
    color: 'var(--grey-5)',
  });

  const [formData, setFormData] = useState<FormData>({
    userId: '',
    password: '',
    validPassword: '',
    universityName: '',
    universityEmail: '',
  });

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

  /*입력창 변경시 */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);

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

  /*비밀번호 유효성 체크 */
  useEffect(() => {
    const lengthCheck = formData.password.length >= 8 && formData.password.length <= 16;
    const numberCheck = /\d/.test(formData.password);
    const uppercaseCheck = /[A-Z]/.test(formData.password);

    setLengthValid(lengthCheck);
    setNumberValid(numberCheck);
    setUppercaseValid(uppercaseCheck);
  }, [formData.password]);

  /**비밀번호 보이는 버튼 */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      setButtonColor({ backgroundColor: 'var(--green-primary)', color: '#ffffff' });
    } else if (emailValid && formData.universityName) {
      setButtonColor({ backgroundColor: 'var(--green-primary)', color: '#ffffff' });
    } else if (allAgreed) {
      setButtonColor({ backgroundColor: 'var(--green-primary)', color: '#ffffff' });
    } else {
      setButtonColor({ backgroundColor: 'var(--grey-2)', color: 'var(--grey-5)' });
    }
  }, [formData]);

  /*탭 전환  */
  const renderTabContent = () => {
    switch (activeIndex) {
      case 0: // 아이디와 비밀번호 입력 탭
        return (
          <>
            <S.PasswordInputWrapper>
              <TextLabel
                text={'회원가입'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
            </S.PasswordInputWrapper>

            <S.PasswordInputWrapper>
              <TextLabel
                text={'아이디'}
                size={16}
                $weight={500}
                color={'var(--grey-7)'}
              ></TextLabel>

              <S.LoginInput
                name="userId"
                type={'text'}
                placeholder="아이디 입력"
                value={formData.userId}
                onChange={handleInputChange}
              />
            </S.PasswordInputWrapper>

            <S.PasswordInputWrapper>
              <TextLabel
                text={'비밀번호'}
                size={16}
                $weight={500}
                color={'var(--grey-7)'}
              ></TextLabel>

              <S.LoginInput
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleInputChange}
              />
              <S.EyeIcon src={eyeOff} alt="eye" onClick={togglePasswordVisibility} />

              <S.Checklist>
                <S.CheckItem valid={uppercaseValid}>대문자</S.CheckItem>
                <S.CheckItem valid={numberValid}>숫자</S.CheckItem>
                <S.CheckItem valid={lengthValid}>8~16자 이내</S.CheckItem>
              </S.Checklist>
            </S.PasswordInputWrapper>

            <S.PasswordInputWrapper>
              <TextLabel
                text={'비밀번호 확인'}
                size={16}
                $weight={500}
                color={'var(--grey-7)'}
              ></TextLabel>

              <S.LoginInput
                name="validPassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호 재입력"
                value={formData.validPassword}
                onChange={handleInputChange}
              />
              <S.EyeIcon src={eyeOff} alt="eye" onClick={togglePasswordVisibility} />
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
                $bgcolor={buttonColor.backgroundColor}
                color={buttonColor.color}
              />
            </S.ButtonWrapper>
          </>
        );
      case 1: // 재학생 인증 탭
        return (
          <>
            <S.PasswordInputWrapper>
              <TextLabel
                text={'재학생 인증'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
            </S.PasswordInputWrapper>

            <S.PasswordInputWrapper>
              <TextLabel
                text={'학교 이름'}
                size={16}
                $weight={500}
                color={'var(--grey-7)'}
              ></TextLabel>

              <S.LoginInput
                name="universityName"
                type={'text'}
                placeholder="동국대학교"
                value={formData.universityName}
                onChange={handleInputChange}
              />

              <TextLabel
                text={'학교 이메일'}
                size={16}
                $weight={500}
                color={'var(--grey-7)'}
              ></TextLabel>

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
                $bgcolor={buttonColor.backgroundColor}
                color={buttonColor.color}
              />
            </S.ButtonWrapper>
          </>
        );
      case 2: //스타일 태그 선택 탭
        return (
          <>
            <S.PasswordInputWrapper>
              <TextLabel
                text={'스타일 태그 선택'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
            </S.PasswordInputWrapper>
            <TagInput label="스타일 태그 선택" setButtonColor={setButtonColor} />
            <S.ButtonWrapper>
              <Button
                handleOnClick={goToNextTab}
                children="다음"
                width="100%"
                $padding="16px"
                fontSize="18px"
                $bgcolor={buttonColor.backgroundColor}
                color={buttonColor.color}
              />
            </S.ButtonWrapper>
          </>
        );

      case 3: //약관 동의
        return (
          <>
            <S.PasswordInputWrapper>
              <TextLabel
                text={'약관 동의'}
                size={24}
                $weight={700}
                color={'var(--grey-7)'}
              ></TextLabel>
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
            </S.PasswordInputWrapper>
            <S.ButtonWrapper>
              <Button
                handleOnClick={goToNextTab}
                children="완료"
                width="100%"
                $padding="16px"
                fontSize="18px"
                $bgcolor={buttonColor.backgroundColor}
                color={buttonColor.color}
              />
            </S.ButtonWrapper>
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
            </S.FlexCenter>
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
            <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={goToPreviousTab} />
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
