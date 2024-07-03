import { Header, TextLabel, TextInput, ButtonBack, Loading, BoxError } from 'components/index';
import * as S from './style';
import { useEffect } from 'react';
import { useAccount, useChangeAccount } from 'service/user/useUserService';
import { useAccountInfo, useAccountInfoActions } from 'store/accountInfo';

const AccountInfo = () => {
  const accountInfo = useAccountInfo();
  const { setAccountInfo, setUserName } = useAccountInfoActions();
  const { mutate: changeAccountInfo } = useChangeAccount();
  const { data: accountInfoData, status } = useAccount();

  useEffect(() => {
    if (accountInfoData) setAccountInfo(accountInfoData);
  }, [accountInfoData]);

  if (status === 'pending') return <Loading $height="100svh" />;

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          계정 정보
        </TextLabel>
        <ButtonBack className="left" />
        <TextLabel
          className="right"
          onClick={() => changeAccountInfo(accountInfo)}
          size={18}
          $weight={700}
          color="var(--grey-5)"
        >
          저장
        </TextLabel>
      </Header>

      {status === 'error' && (
        <BoxError $height="calc(100svh - var(--header-size))">
          계정을 불러오는 중에 오류가 발생했습니다.
        </BoxError>
      )}

      {status === 'success' && (
        <S.InputWrapper>
          <TextInput
            label="이름"
            name="user_name"
            labelSize={16}
            value={accountInfo.user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextInput
            label="학교"
            name="university_name"
            labelSize={16}
            value={accountInfo.university_name}
            readonly={true}
          />
          <TextInput
            label="이메일"
            name="university_email"
            labelSize={16}
            value={accountInfo.university_email}
            readonly={true}
          />
          <S.Link>학교 변경하기</S.Link>
        </S.InputWrapper>
      )}
    </>
  );
};

export default AccountInfo;
