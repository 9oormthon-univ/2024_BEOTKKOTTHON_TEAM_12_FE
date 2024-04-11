import { DonationDataType } from 'types/types';
import * as S from './style';

interface TableProps {
  donationData: DonationDataType[];
}

const TableDonationHistory = ({ donationData }: TableProps) => {
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
