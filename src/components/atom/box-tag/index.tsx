import styled from 'styled-components';

const BoxTag = styled.div`
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

export default BoxTag;
