import { DonationDataType } from 'types/types';
import * as S from './style';
import Loading from 'components/atom/loading';
import BoxError from 'components/atom/box-error';

interface TableProps {
  donationData: DonationDataType[];
  status: string;
}

const TableDonationHistory = ({ donationData, status }: TableProps) => {
  const height = `calc(100svh - var(--header-size))`;

  if (status === 'pending') return <Loading $height={height} />;
  if (status === 'error')
    return <BoxError $height={height}>기부 내역을 불러오지 못했습니다.</BoxError>;
  if (donationData.length === 0) return <BoxError $height={height}>기부 내역이 없습니다.</BoxError>;

  return (
    <S.Conatiner>
      <S.THead>
        <tr>
          <th>
            <p>기증일자</p>
          </th>
          <th>
            <p>기증내역</p>
          </th>
          <th>
            <p>진행상태</p>
          </th>
        </tr>
      </S.THead>
      <tbody>
        {donationData.map((row, index) => (
          <tr key={index}>
            <td>{row.date}</td>
            <td>
              의류 {row.clothes_count} / 잡화 {row.fashion_count}
            </td>
            <td className={row.is_donation_complete ? 'completed' : ''}>
              {row.is_donation_complete ? '완료' : '진행 중'}
            </td>
          </tr>
        ))}
      </tbody>
    </S.Conatiner>
  );
};

export default TableDonationHistory;
