import styled from 'styled-components';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

const UserDashboard = () => {
    return (
        <StyledMain>
            <ActivityFeed></ActivityFeed>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
`;

export default UserDashboard;
