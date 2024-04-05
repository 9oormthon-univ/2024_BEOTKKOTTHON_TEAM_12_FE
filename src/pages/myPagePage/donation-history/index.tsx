import { useEffect, useState } from 'react';
import * as S from './style';
import { ButtonBack, Checkbox, Header, TextLabel } from 'components/index';
import { instance } from 'apis';

type donationDataType = {
  id: number;
  date: string;
  clothes_count: number;
  fashion_count: number;
  is_donation_complete: boolean;
};

const DonationHistory = () => {
  const [donationData, setDonationData] = useState<donationDataType[]>([]);

  const userId = localStorage.getItem('userId');

  const getDonationHistory = async () => {
    try {
      const response = await instance.get(`/users/myDonations/${userId}`);
      console.log('기부 내역 불러오기 성공:', response.data);
      setDonationData(response.data);
    } catch (error) {
      console.error('기부 내역 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    getDonationHistory();
  }, []);

  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

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

      <S.Table>
        <S.TableHead>
          <S.TableRow>
            <S.TableHeaderCell>기증일자</S.TableHeaderCell>
            <S.TableHeaderCell>기증내역</S.TableHeaderCell>
            <S.TableHeaderCell>진행상태</S.TableHeaderCell>
          </S.TableRow>
        </S.TableHead>
        <tbody>
          {donationData
            .filter((row) => !showCompletedOnly || row.is_donation_complete)
            .map((row, index) => {
              console.log(row);
              return (
                <S.TableRow key={index}>
                  <S.TableCell>{row.date}</S.TableCell>
                  <S.TableCell>
                    의류 {row.clothes_count} / 잡화 {row.fashion_count}
                  </S.TableCell>
                  <S.TableCell
                    style={{
                      color: row.is_donation_complete ? 'var(--green-primary)' : '',
                    }}
                  >
                    {row.is_donation_complete ? '완료' : '진행 중'}
                  </S.TableCell>
                </S.TableRow>
              );
            })}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default DonationHistory;
