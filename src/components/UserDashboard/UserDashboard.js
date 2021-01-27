import styled from 'styled-components';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import Sidebar from '../Sidebar/Sidebar';

const UserDashboard = () => {
  return (
    <>
      <Sidebar />
      <StyledMain className='activity-feed'>
        <h1>{localStorage.getItem('username')}'s Dashboard</h1>
        <ActivityFeed type='user' canPost={true}></ActivityFeed>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  float: right;
  width: 100%;
  height: 100vh;

  h1 {
    color: white;
    text-align: center;
    padding-top: 4rem;
  }

  @media all and (min-width: 970px) {
    width: calc(100% - 20rem);
  }
`;

export default UserDashboard;
