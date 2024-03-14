import styled from 'styled-components';

interface FilterProps {
  $active: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 12px;
    color: var(--grey-6);
  }
`;

export const Filter = styled.div<FilterProps>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.$active ? 'var(--green-6)' : 'var(--grey-6)')};
  cursor: pointer;

  & > p {
    margin-left: 5px;
    font-size: 13px;
  }
`;
