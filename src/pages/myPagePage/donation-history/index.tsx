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
import { useInView } from 'react-intersection-observer';

const DonationHistory = () => {
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const {
    data: donationHistoryQuery,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = useDonationHistoryQuery(showCompletedOnly);
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

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
          총 {donationHistoryQuery ? donationHistoryQuery.totalElements : 0}개
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

      <TableDonationHistory donationData={donationHistoryQuery?.pagesData || []} status={status} />
      {isFetchingNextPage ? (
        <Loading $width="100%" $height="50px" />
      ) : (
        <div ref={ref} style={{ height: '50px' }} />
      )}
    </S.Container>
  );
};

export default DonationHistory;
