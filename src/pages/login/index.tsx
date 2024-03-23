import { useEffect, useState } from "react";
import * as S from "./style";
import logo from "assets/logo/big-logo.svg";
import eyeOff from "assets/icons/eye-off.svg";
import { Button, Checkbox, TextLabel } from "components/index";
import { useNavigate } from "react-router-dom";

interface FormData {
  userId: string;
  password: string;
}

const Login = () => {
  const handleFindId = () => {
    console.log("아이디찾기");
  };

  const handleSignIn = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    console.log("로그인");
    navigate("/donation");
  };

  const hadleNewPassword = () => {
    console.log("비밀번호 재설정");
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    password: "",
  });

  const [autoLoginChecked, setAutoLoginChecked] = useState(false);
  const [saveIdChecked, setSaveIdChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: "var(--grey-2)",
    color: "var(--grey-5)",
  });

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      userId: event.target.value,
    });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (formData.userId && formData.password) {
      setButtonColor({
        backgroundColor: "var(--green-primary)",
        color: "#ffffff",
      });
    } else {
      setButtonColor({
        backgroundColor: "var(--grey-2)",
        color: "var(--grey-5)",
      });
    }
  }, [formData]);

  return (
    <S.LoginWrapper>
      <img src={logo} alt="logo" />
      <S.LoginBox>
        <S.LoginInput
          type="text"
          placeholder="아이디"
          value={formData.userId}
          onChange={handleIdChange}
        />
        <S.PasswordInputWrapper>
          <S.LoginInput
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호"
            value={formData.password}
            onChange={handlePasswordChange}
          />
          <S.EyeIcon
            src={eyeOff}
            alt="eye"
            onClick={togglePasswordVisibility}
          />
        </S.PasswordInputWrapper>
      </S.LoginBox>

      <S.CheckboxWrapper>
        <Checkbox
          id={"autoLogin"}
          label="자동 로그인"
          checked={autoLoginChecked}
          setIsChecked={setAutoLoginChecked}
        />
        <Checkbox
          id={"saveId"}
          label="아이디 저장"
          checked={saveIdChecked}
          setIsChecked={setSaveIdChecked}
        />
      </S.CheckboxWrapper>

      <Button
        handleOnClick={handleLogin}
        children="로그인"
        width="335px"
        $padding="16px"
        fontSize="18px"
        $bgcolor={buttonColor.backgroundColor}
        color={buttonColor.color}
      />

      <S.LinkWrapper>
        <S.Link onClick={handleFindId}>아이디 찾기</S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={hadleNewPassword}>비밀번호 재설정</S.Link>
        <S.Divider>|</S.Divider>
        <S.Link onClick={handleSignIn}>회원가입</S.Link>
      </S.LinkWrapper>

      <S.LoginMessage>
        <TextLabel
          text={
            "로그인하면 웨어 이용약관에 동의하는 것으로 간주합니다. \n웨어의 회원 정보 처리 방식은 개인정보 처리방침 및 쿠키 정책에서 확인해보세요."
          }
          size={9}
          $weight={300}
          color="var(--grey-4)"
          $textAlign="center"
        />
      </S.LoginMessage>
    </S.LoginWrapper>
  );
};

export default Login;
