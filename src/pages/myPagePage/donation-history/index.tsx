import { useState } from 'react';
import * as S from './style';
import { ButtonBack, Checkbox, Header, TableDonationHistory, TextLabel } from 'components/index';
import { useDonationHistoryQuery } from 'hooks/queries/user/useDonationHistoryQuery';

const DonationHistory = () => {
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const { data: donationHistoryQuery, status } = useDonationHistoryQuery(showCompletedOnly);

  return (
    <S.Container>
      <Header>
        <ButtonBack className="left" $marginLeft="10px" />
        <TextLabel size={18} $weight={500}>
          기부 내역
        </TextLabel>
      </Header>

      <S.TableHeader>
        <TextLabel size={13} $weight={400} color={'var(--grey-6)'}>
          총 {donationHistoryQuery ? donationHistoryQuery.length : 0}개
        </TextLabel>
        <Checkbox
          label="완료된 내역만 보기"
          id={'complete'}
          $circleSize="15px"
          $fontSize={13}
          checked={showCompletedOnly}
          setIsChecked={setShowCompletedOnly}
          color={'var(--grey-6)'}
        />
      </S.TableHeader>

      <TableDonationHistory donationData={donationHistoryQuery} status={status} />
    </S.Container>
  );
};

export default DonationHistory;
