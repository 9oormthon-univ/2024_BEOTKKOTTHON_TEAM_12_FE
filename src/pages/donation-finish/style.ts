import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--header-size) + var(--content-size));

  .green {
    margin-top: 33px;
    font-size: 15px;
    color: var(--green-7);
  }

  .grey {
    margin-top: 19px;
    font-size: 13px;
    color: var(--grey-5);
    line-height: 18px;
    text-align: center;
  }
`;

export const BoxImg = styled.div`
  width: 199px;
  height: 89px;

  & > img {
    width: 100%;
  }
`;

export const BtnNext = styled.div`
  display: grid;
  place-items: center;
  height: var(--nav-size);
  padding: 0 20px;
`;
