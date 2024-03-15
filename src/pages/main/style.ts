import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 86px);
  padding: 0 20px;

  .header {
    margin-bottom: 15px;
  }

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
