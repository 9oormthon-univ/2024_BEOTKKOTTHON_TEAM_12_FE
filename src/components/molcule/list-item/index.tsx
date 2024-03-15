import React from 'react';
import * as S from './style';
import { BlockUser } from 'src/types/types';

interface ListItemProps {
  blockList: BlockUser[];
  buttonName?: string;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ blockList, buttonName, onClick }) => {
  return blockList.map((blockUser, index) => {
    return (
      <S.ListItemWrapper key={index}>
        <S.LeftContainer>
          <S.ProfileImage src={blockUser.profile} alt="Profile" />
        </S.LeftContainer>

        <S.MiddleContainer>
          <S.UpContainer>
            {blockUser.name}
            <img src={blockUser.levelImg} alt="level" />
          </S.UpContainer>
        </S.MiddleContainer>

        <S.RightContainer>
          {buttonName && <S.UpButton onClick={onClick}>{buttonName}</S.UpButton>}
        </S.RightContainer>
      </S.ListItemWrapper>
    );
  });
};

export default ListItem;
