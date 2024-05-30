import { BoxHeader } from 'components/index';
import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px;

  .search {
    margin-bottom: 34px;
  }

  .recent-search {
    margin-bottom: 15px;
  }

  .popular {
    margin-top: 53px;
  }
`;

export const SectionSearch = styled(BoxHeader)`
  margin-top: 15px;
  padding: 0 20px;
  gap: 10px;

  .cancle {
    flex-shrink: 0;
    width: 26px;
    font-size: 14px;
    color: var(--grey-6);
    letter-spacing: -1px;
    cursor: pointer;
  }
`;
