import { ProfileCard, ProgressBar } from '@components/index';
import React from 'react';
import styled from 'styled-components';
import useStore from '../../../store/userData';

export const UserSectionWrapper = styled.div`
  background-color: #fff;
  padding-top: 20px;
`;
const UserSection: React.FC = () => {
  const { userProfileInfo } = useStore();

  return (
    <UserSectionWrapper>
      <ProfileCard />
      <ProgressBar
        level={userProfileInfo.level}
        nextLevel={userProfileInfo.next_level}
        currentExp={userProfileInfo.point}
        remainLevelExp={userProfileInfo.remain_level_point}
      />
    </UserSectionWrapper>
  );
};

export default UserSection;
