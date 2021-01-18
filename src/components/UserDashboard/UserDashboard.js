import styled from 'styled-components';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import SideBar from '../SideBar/SideBar';

const UserDashboard = () => {
    return (
        <StyledMain>
            <h1>User's Dashboard</h1>
            <nav>
                <SideBar />
            </nav>
            <div className='activity-feed'>
                <ActivityFeed></ActivityFeed>
            </div>
        </StyledMain>
    );

};

const StyledMain = styled.main`
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0d7377;

    nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
    }

    h1 {
        color: white;
        text-align: center;
        margin: 5rem;
        margin-bottom: 2rem;
    }
`;

export default UserDashboard;
