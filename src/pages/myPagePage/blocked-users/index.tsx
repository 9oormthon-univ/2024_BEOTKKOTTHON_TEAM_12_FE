import { ButtonBack, Header, ListBlockUser, TextLabel } from 'components/index';
import { useBlockUserQuery } from 'hooks/queries/user/useBlockUserQuery';

const BlockedUsers = () => {
  const { data: blockedUserList, status } = useBlockUserQuery();

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          차단한 사용자
        </TextLabel>
        <ButtonBack className="left" $marginLeft="10px" />
      </Header>

      <ListBlockUser userList={blockedUserList} status={status} />
    </>
  );
};

export default BlockedUsers;
