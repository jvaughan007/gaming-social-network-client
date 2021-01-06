import styled from 'styled-components';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const UserDashboard = () => {
    return (
        <StyledMain>
            <h1>User's Dashboard</h1>
            <ActivityFeed></ActivityFeed>
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

    h1 {
        color: white;
        text-align: center;
        margin: 5rem;
        margin-bottom: 2rem;
    }
`;

export default UserDashboard;
