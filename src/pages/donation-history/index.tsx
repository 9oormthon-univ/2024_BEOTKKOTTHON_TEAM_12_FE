import { useState } from 'react';
import arrow from '@assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Checkbox, Header, TextLabel } from '@components/index';

const DonationHistory = () => {
  const navigate = useNavigate();
  const data = [
    { date: '2024.03.20', record: '의류 56 / 잡화 0', status: '진행중' },
    { date: '2024.03.23', record: '의류 56 / 잡화 0', status: '완료' },
    { date: '2024.03.24', record: '의류 56 / 잡화 0', status: '완료' },
  ];

  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  return (
    <S.Container>
      <Header>
        <S.BtnLeft src={arrow} className="left" alt="btn-back" onClick={() => navigate(-1)} />
        <TextLabel text={'기부 내역'} size={18} $weight={500} />
      </Header>
      <S.TableHeader>
        <TextLabel text={`총 ${data.length}개`} size={13} $weight={400} color={'var(--grey-6)'} />
        <Checkbox
          label="완료된 내역만 보기"
          id={'complete'}
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
          {data
            .filter((row) => !showCompletedOnly || row.status === '완료')
            .map((row, index) => (
              <S.TableRow key={index}>
                <S.TableCell>{row.date}</S.TableCell>
                <S.TableCell>{row.record}</S.TableCell>
                <S.TableCell style={{ color: row.status === '완료' ? 'var(--green-primary)' : '' }}>
                  {row.status}
                </S.TableCell>
              </S.TableRow>
            ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default DonationHistory;
