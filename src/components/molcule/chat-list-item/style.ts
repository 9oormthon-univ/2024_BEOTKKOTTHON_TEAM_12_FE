import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 10px;
  border-bottom: 1px solid var(--grey-2);
  cursor: pointer;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile {
    display: flex;
    gap: 2px;
    align-items: center;
    & > img {
      width: 16px;
      height: 16px;
    }
  }

  .time {
    font-size: 12px;
    color: var(--grey-5);
  }
`;

export const Message = styled.div`
  color: var(--grey-7);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 텍스트 처리
  max-width: 200px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  .count {
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--green-6);
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`;
