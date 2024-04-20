import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans KR';
`;

export const AgreeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding-bottom: 15px;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .agreement-subtext {
    margin-top: 10px;
  }
`;

export const ChecklistColumn = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 15px;
  border-top: 1px solid var(--grey-3);
  gap: 10px;
  list-style: none;
`;

export const CheckItemLarge = styled.li<{ $valid: boolean }>`
  padding: 5px;
  color: ${(props) => (props.$valid ? 'var(--green-primary)' : 'var(--grey-7)')};
  font-size: 14px;
  font-weight: 400;
  &:before {
    content: '✓';
    color: ${(props) => (props.$valid ? 'var(--green-primary)' : 'var(--grey-7)')};
    margin: 0 8px;
  }
`;
