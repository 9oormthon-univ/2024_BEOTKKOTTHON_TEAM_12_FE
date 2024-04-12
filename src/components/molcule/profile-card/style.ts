import styled from 'styled-components';
export const ProfileCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 11px;
  padding: 15px;
  margin: 20px 20px 10px 20px;
  border-radius: 10px;

  background-color: var(--grey-1);
  border: 1px solid var(--grey-3);
`;

export const MiddleContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
  gap: 4.5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  gap: 3px;
`;

export const BtnArrow = styled.img`
  width: 11px;
  height: 19px;
  cursor: pointer;
`;
