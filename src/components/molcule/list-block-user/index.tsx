import React from 'react';
import * as S from './style';
import { useBlockUserQuery } from 'hooks/queries/user/useBlockUserQuery';
import { useDeleteBlockUserMutation } from 'hooks/queries/user/useDeleteBlockUserMutation';
import { BlockUser } from 'types/types';
import Loading from 'components/atom/loading';
import { Button, ProfileAvatar, TextLabel } from 'components';

const ListBlockUser = () => {
  const blockedUserList = useBlockUserQuery();
  const { mutate: deleteBlockUser } = useDeleteBlockUserMutation();

  if (blockedUserList.isLoading) return <Loading />;

  return (
    <S.Container>
      {blockedUserList.data.map((blockUser: BlockUser, index: number) => (
        <S.BoxUser key={index}>
          <ProfileAvatar imageUrl={blockUser.blocked_user_profile_image} />

          <S.UserName>
            <TextLabel size={16}>{blockUser.blocked_user_name}</TextLabel>
            <img src={blockUser.levelImg} width={16} height={16} />
          </S.UserName>

          <Button
            width="77px"
            $padding="5px 10px"
            $borderRadius="10px"
            $bgcolor="var(--grey-2)"
            fontSize="14px"
            color="var(--grey-5)"
            handleOnClick={() => deleteBlockUser(blockUser.blocked_user_name)}
          >
            차단해제
          </Button>
        </S.BoxUser>
      ))}
    </S.Container>
  );
};

export default ListBlockUser;
