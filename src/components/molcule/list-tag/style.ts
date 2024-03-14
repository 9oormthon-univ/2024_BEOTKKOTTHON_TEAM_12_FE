import styled from 'styled-components';

interface TagProps {
  $active: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 7px;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex-shrink: 0;
  }
`;

export const Tag = styled.div<TagProps>`
  display: flex;
  align-items: center;
  height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.$active ? 'var(--green-6)' : 'var(--grey-3)')};
  border-radius: 15px;

  background-color: ${(props) => (props.$active ? 'rgba(220, 248, 219, 0.3)' : '')};
  color: ${(props) => (props.$active ? 'var(--green-7)' : 'var(--grey-6)')};
  font-size: 13px;
`;