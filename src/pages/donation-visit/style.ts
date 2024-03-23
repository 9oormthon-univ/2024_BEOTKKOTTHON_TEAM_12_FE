import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  font-family: 'Noto Sans KR';
`;

export const BtnLeft = styled.img`
  transform: rotate(180deg);
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 17px;
  margin-bottom: 13px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'var(--green-primary)' : 'var(--grey-3)')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const BoxText = styled.div`
  margin: 41px 0;
  word-break: keep-all;
  .main-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--green-6);
  }

  .notice-list {
    margin-left: 20px;
    font-size: 12px;
    font-weight: 300;
    color: #666666;
    line-height: 25px;
    list-style: disc;
    word-break: keep-all;

    & > li {
      margin-bottom: 10px;
    }

    li::marker {
      color: #666666;
    }
  }
`;

export const TabContent = styled.div`
  padding: 0px 20px 20px 20px;
`;
