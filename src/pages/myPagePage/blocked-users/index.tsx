import { ButtonBack, Header, ListBlockUser, TextLabel } from 'components/index';

const BlockedUsers = () => {
  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          차단한 사용자
        </TextLabel>
        <ButtonBack className="left" $marginLeft="10px" />
      </Header>
      <ListBlockUser />
    </>
  );
};

export default BlockedUsers;
