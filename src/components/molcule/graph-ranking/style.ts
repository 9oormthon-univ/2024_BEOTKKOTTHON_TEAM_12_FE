import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxUniv = styled.div`
  display: flex;

  & > img {
    width: 25px;
    height: 25px;
  }

  .name {
    width: 90px;
    font-size: 12px;
    font-weight: bold;
    color: var(--grey-7);
  }
`;

export const Bar = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width};
`;
