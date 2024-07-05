import { ProfileCard, ProgressBar } from 'components/index';
import styled from 'styled-components';
import { MypageResponse } from 'types/userType';

export const UserSectionWrapper = styled.div`
  background-color: #fff;
  padding-top: 20px;
`;

interface UserSectionProps {
  userData: MypageResponse;
}

const UserSection = ({ userData }: UserSectionProps) => {
  return (
    <UserSectionWrapper>
      <ProfileCard userData={userData} />
      <ProgressBar userData={userData} />
    </UserSectionWrapper>
  );
};

export default UserSection;
