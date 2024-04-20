import { useEffect, useState } from 'react';
import * as S from './style';
import { Checkbox, TextLabel } from 'components/index';
import { useSigninFormDataActions } from 'store/signInData';

const SignInAgreement = () => {
  //약관 동의 체크박스
  const [allAgreed, setAllAgreed] = useState(false);
  const { setIsDisabled } = useSigninFormDataActions();

  useEffect(() => {
    if (allAgreed) setIsDisabled(false);
  }, [allAgreed]);

  return (
    <S.Container>
      <S.AgreeWrapper>
        <Checkbox
          $circleSize="18px"
          label=""
          id={'allAgree'}
          checked={allAgreed}
          setIsChecked={setAllAgreed}
        />
        <S.ColumnWrapper>
          <label htmlFor="allAgree">
            <TextLabel size={14} $weight={700} color={'var(--grey-7)'}>
              모두 동의합니다
            </TextLabel>
            <TextLabel size={12} $weight={400} color={'var(--grey-5)'}>
              <p className="agreement-subtext">
                전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로도 동의를
                선택하실 수 있습니다.
              </p>
            </TextLabel>
          </label>
        </S.ColumnWrapper>
      </S.AgreeWrapper>

      <S.ChecklistColumn>
        <S.CheckItemLarge $valid={allAgreed}>(필수) 만 18세 이상입니다.</S.CheckItemLarge>
        <S.CheckItemLarge $valid={allAgreed}>(필수) 개인정보 수집 및 이용 동의</S.CheckItemLarge>
        <S.CheckItemLarge $valid={allAgreed}>(필수) 서비스 이용약관 동의</S.CheckItemLarge>
        <S.CheckItemLarge $valid={allAgreed}>(선택) 혜택/이벤트 정보 수신 동의</S.CheckItemLarge>
      </S.ChecklistColumn>
    </S.Container>
  );
};

export default SignInAgreement;
