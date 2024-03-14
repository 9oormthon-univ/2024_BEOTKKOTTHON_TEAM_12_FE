import styled from 'styled-components';

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 15px;
    font-weight: bold;
    color: var(--grey-7);
  }

  .sub {
    font-size: 13px;
    color: var(--grey-4);
    cursor: pointer;
  }
`;

export default Label;
