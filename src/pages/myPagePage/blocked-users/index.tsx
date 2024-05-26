import { ButtonBack, Header, ListBlockUser, Loading, TextLabel } from 'components/index';
import { useBlockUserQuery } from 'hooks/queries/user/useBlockUserQuery';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BlockedUsers = () => {
  const { data: blockedUserList, status, fetchNextPage, isFetchingNextPage } = useBlockUserQuery();
  const { ref, inView } = useInView({ threshold: 0, delay: 0 });

  useEffect(() => {
    if (inView && fetchNextPage) fetchNextPage();
  }, [inView]);

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          차단한 사용자
        </TextLabel>
        <ButtonBack className="left" />
      </Header>

      <ListBlockUser userList={blockedUserList?.pagesData || []} status={status} />
      {isFetchingNextPage ? (
        <Loading $width="100%" $height="50px" />
      ) : (
        <div ref={ref} style={{ height: '50px' }} />
      )}
    </>
  );
};

export default BlockedUsers;
