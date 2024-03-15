import styled from 'styled-components';

const BoxKebabList = styled.div`
  display: flex;
  flex-direction: column;
  width: 116px;
  position: absolute;
  border: 1px solid var(--grey-3);
  border-radius: 5px;
  top: 45px;
  right: 26px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  z-index: 3;

  & > p {
    display: grid;
    place-items: center;
    height: 40px;
    margin: 0 8px;
    border-bottom: 1px solid var(--grey-3);
    color: var(--grey-7);
  }

  .red {
    color: var(--red-primary);
  }
`;

export default BoxKebabList;
