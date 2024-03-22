import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-2);
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .ranking {
    margin-bottom: 14px;
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  padding: 20px 33px;
  gap: 5px;
  background-color: white;
`;
