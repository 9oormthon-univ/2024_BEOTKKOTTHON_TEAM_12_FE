import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 5px;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex-shrink: 0;
  }
`;

export const BoxImage = styled.div`
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 8px;
  flex-shrink: 0;

  .img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  .close {
    width: 22px;
    height: 22px;
    top: 8px;
    right: 8px;
    color: var(--color-grey-500);
    position: absolute;
    z-index: 3;
  }
`;
