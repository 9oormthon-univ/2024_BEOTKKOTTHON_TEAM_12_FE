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
import { useInView } from 'react-intersection-observer';
import { useDonationHistory } from 'service/user/useUserService';

const DonationHistory = () => {
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const endPoint = showCompletedOnly ? `complete/` : ``;
  const {
    data: donationData,
    status,
    fetchNextPage,
    isFetchingNextPage,
  } = useDonationHistory(endPoint);
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

  return (
    <S.Container>
      <Header>
        <ButtonBack className="left" />
        <TextLabel size={18} $weight={500}>
          기부 내역
        </TextLabel>
      </Header>

      <S.TableHeader>
        <TextLabel size={13} $weight={400} color={'var(--grey-6)'}>
          총 {donationData ? donationData.totalElements : 0}개
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

      <TableDonationHistory donationData={donationData?.pagesData || []} status={status} />
      {isFetchingNextPage ? (
        <Loading $width="100%" $height="50px" />
      ) : (
        <div ref={ref} style={{ height: '50px' }} />
      )}
    </S.Container>
  );
};

export default DonationHistory;
