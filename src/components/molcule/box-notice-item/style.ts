import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;

  .smile {
    margin-bottom: 40px;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 0.56px;
  width: fit-content;
  margin-bottom: 22px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: var(--green-6);
  font-size: 16px;
  font-weight: bold;
  color: white;

  & > img {
    width: 25px;
    height: 22px;
  }
`;

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;

  .img-box {
    display: grid;
    place-items: center;
    width: 55px;
    height: 45px;
  }
`;

export const Possible = styled.ul`
  font-size: 13px;
  color: #666666;
  list-style: disc;

  & > li {
    line-height: 25px;
  }

  &::marker {
    color: #666666;
  }
`;
