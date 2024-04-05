import { useEffect, useState } from 'react';
import * as S from './style';
import {
  ButtonBack,
  Checkbox,
  Header,
  Loading,
  TableDonationHistory,
  TextLabel,
} from 'components/index';
import { useDonationHistoryQuery } from 'hooks/queries/user/useDonationHistoryQuery';
import { DonationDataType } from 'types/types';
import { useCompletedDonationHistoryQuery } from 'hooks/queries/user/useCompletedDonationHistoryQuery';

const DonationHistory = () => {
  const [donationData, setDonationData] = useState<DonationDataType[]>([]);
  const donationHistoryQuery = useDonationHistoryQuery();
  const completedDonationHistoryQuery = useCompletedDonationHistoryQuery();
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  useEffect(() => {
    if (showCompletedOnly && completedDonationHistoryQuery.data) {
      setDonationData(completedDonationHistoryQuery.data);
    } else if (!showCompletedOnly && donationHistoryQuery.data) {
      setDonationData(donationHistoryQuery.data);
    }
  }, [showCompletedOnly, completedDonationHistoryQuery.data, donationHistoryQuery.data]);

  if (donationHistoryQuery.isLoading || completedDonationHistoryQuery.isLoading) return <Loading />;

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
          총 {donationData.length}개
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

      <TableDonationHistory donationData={donationData} />
    </S.Container>
  );
};

export default DonationHistory;
