import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 20px;
  gap: 5px;
  background-color: var(--green-6);

  .header {
    font-size: 20px;
    letter-spacing: -4%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1.5px;
  color: white;

  .leaf {
    width: 24px;
    height: 24px;
  }
`;
