import { Header, TextLabel, TextInput } from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AccountInfo = () => {
  const [userName, setUserName] = useState('김서영');
  const [accountInfo, setAccountInfo] = useState({
    name: userName,
    university: '성균관대학교 서울캠퍼스',
    email: 'kimseoyoung@skku.edu',
  });
  const navigate = useNavigate();

  const changeUniversity = () => {
    console.log('학교 변경하기');
  };

  const postChangeAccountInfo = () => {
    console.log('저장하기');
    console.log(accountInfo);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setAccountInfo({ ...accountInfo, name: e.target.value });
  };

  return (
    <>
      <Header>
        <TextLabel text="계정 정보" size={16} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <S.HederLeft
          className="right "
          onClick={postChangeAccountInfo}
          text="저장"
          size={16}
          weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <S.InputWrapper>
        <TextInput label="이름" labelSize={16} value={accountInfo.name} onChange={onChangeInput} />
        <TextInput label="학교" labelSize={16} value={accountInfo.university} readonly={true} />
        <TextInput label="이메일" labelSize={16} value={accountInfo.email} readonly={true} />
        <S.Link onClick={changeUniversity}>학교 변경하기</S.Link>
      </S.InputWrapper>
    </>
  );
};

export default AccountInfo;
