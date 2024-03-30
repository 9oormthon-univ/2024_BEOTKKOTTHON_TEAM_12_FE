import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: var(--content-size);
  padding: 0 20px;

  .search {
    margin-bottom: 13px;
  }

  .category {
    margin-bottom: 10px;
  }

  .filter {
    margin-bottom: 16px;
  }

  .items {
    overflow-y: scroll;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Error = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  color: var(--grey-7);
`;
