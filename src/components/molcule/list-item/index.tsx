import React from "react";
import * as S from "./style";
import { BlockUser } from "types/types";

interface ListItemProps {
  blockList: BlockUser[];
  buttonName?: string;
  onClick?: (userName: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  blockList,
  buttonName,
  onClick,
}) => {
  // React.Fragment를 사용하여 배열을 묶어 반환
  return (
    <React.Fragment>
      {blockList.map((blockUser, index) => (
        <S.ListItemWrapper key={index}>
          <S.LeftContainer>
            <S.ProfileImage
              src={blockUser.blocked_user_profile_image}
              alt="Profile"
            />
          </S.LeftContainer>

          <S.MiddleContainer>
            <S.UpContainer>
              {blockUser.blocked_user_name}
              <img src={blockUser.levelImg} alt="level" />
            </S.UpContainer>
          </S.MiddleContainer>

          <S.RightContainer>
            {buttonName && (
              <S.UpButton
                onClick={() => onClick && onClick(blockUser.blocked_user_name)}
              >
                {buttonName}
              </S.UpButton>
            )}
          </S.RightContainer>
        </S.ListItemWrapper>
      ))}
    </React.Fragment>
  );
};

export default ListItem;
