import styled from 'styled-components';
export const ProfileCardWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  padding: 10px 15px;
  margin: 20px auto 10px auto;
  border-radius: 10px;

  background-color: var(--grey-1);
  border: 1px solid var(--grey-3);
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  gap: 4px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
  gap: 3px;
`;

export const Image = styled.img``;
