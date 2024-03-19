import { Header, TextLabel, TextInput } from '@components/index';
import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { instance } from '../../apis/index';

const AccountInfo = () => {
  const [accountInfo, setAccountInfo] = useState({
    user_name: '',
    university_name: '',
    university_email: '',
  });

  /*계정 정보 가져오는 api 호출 */
  const getAccountInfo = async () => {
    const userId = '1';
    console.log('계정 정보 가져오기');
    try {
      const response = await instance.get(`/users/userInfo/${userId}`);
      console.log('계정 정보 불러오기 성공:', response.data);
      setAccountInfo(response.data);
    } catch (error) {
      console.error('계정 정보 불러오기 실패:', error);
      setAccountInfo({
        user_name: '김서영',
        university_name: '성균관대학교 서울캠퍼스',
        university_email: 'kimseoyoung@skku.edu',
      });
    }
  };

  /*계정 정보를 저장하는 api 호출 */
  const postChangeAccountInfo = async () => {
    console.log('저장하기');
    const userId = '1';
    try {
      const response = await instance.put(`/users/userInfo/update/${userId}`, { accountInfo });
      if (response.status === 200) {
        alert('저장되었습니다.');
      } else {
        // 서버에서 예상치 못한 응답을 받았을 경우
        console.error('서버 상태 업데이트 실패:', response);
        alert('저장에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 네트워크 오류나 서버 오류 등의 예외 처리
      console.error('서버에 저장하는 중 오류 발생:', error);
      alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    getAccountInfo();
  }, []);

  const navigate = useNavigate();

  const changeUniversity = () => {
    console.log('학교 변경하기');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({ ...accountInfo, user_name: e.target.value });
  };

  return (
    <>
      <Header>
        <TextLabel text="계정 정보" size={18} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <S.HederLeft
          className="right "
          onClick={postChangeAccountInfo}
          text="저장"
          size={18}
          weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <S.InputWrapper>
        <TextInput
          label="이름"
          labelSize={16}
          value={accountInfo.user_name}
          onChange={onChangeInput}
        />
        <TextInput
          label="학교"
          labelSize={16}
          value={accountInfo.university_email}
          readonly={true}
        />
        <TextInput
          label="이메일"
          labelSize={16}
          value={accountInfo.university_email}
          readonly={true}
        />
        <S.Link onClick={changeUniversity}>학교 변경하기</S.Link>
      </S.InputWrapper>
    </>
  );
};

export default AccountInfo;
