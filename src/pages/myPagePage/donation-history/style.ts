import styled from 'styled-components';
export const Container = styled.div`
  background: white;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 14px;
`;

export const TableHead = styled.thead`
  background: var(--grey-2);
  text-align: center;
`;

export const TableRow = styled.tr`
  padding: 20px 10px;
  text-align: center;
`;

export const TableCell = styled.td`
  width: 33.3333%;
  padding: 15px 20px;
  border-bottom: 1px solid var(--grey-3);
  font-size: 13px;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  margin-bottom: 10px;

  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 45%;
    width: 1px;
    background-color: var(--grey-4);
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  padding: 0 30px;
`;
