import styled from 'styled-components';

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

export const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 29px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid var(--grey-3);
  border-radius: 15px;
  color: var(--grey-6);
  font-size: 13px;
`;
