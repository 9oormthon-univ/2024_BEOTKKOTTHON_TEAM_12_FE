import React from 'react';
import * as S from './style';

const ListItem = ({ user }) => {
  return (
    <>
      <S.ListItemWrapper>
        <S.LeftContainer>
          <S.ProfileImage src="path-to-your-image.jpg" alt="Profile" />
        </S.LeftContainer>

        <S.MiddleContainer>
          <S.UpContainer></S.UpContainer>
        </S.MiddleContainer>

        <S.RightContainer>
          <S.UpContainer>김소영</S.UpContainer>
          <S.DownContainer>오늘 어디서 만나?</S.DownContainer>
        </S.RightContainer>
      </S.ListItemWrapper>
    </>
  );
};

export default ListItem;
