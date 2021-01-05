import styled from 'styled-components';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const UserDashboard = () => {
  return (
    <StyledMain>
      <h1>Dashboard</h1>
     <ActivityFeed></ActivityFeed>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  /* width: 28.8rem;
  margin: 0 auto; */

  /* @media (min-width: 576px) {
    width: 50rem;
  }

  @media (min-width: 768px) {
    width: 70rem;
  }

  @media (min-width: 992px) {
    width: 90rem;
  }

  @media (min-width: 1200px) {
    width: 112rem;
  } */
`;

export default UserDashboard;
