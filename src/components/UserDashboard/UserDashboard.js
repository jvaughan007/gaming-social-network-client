import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserDashboard = () => {
  return (
    <>
      <VertNavBar></VertNavBar>
      <StyledWrapper>
        <div className="dashboard-content">
          <div className="activity-feed">
            <h1>@Gamergame619</h1>
            <p>Connecting Gamers since 2077</p>
            <Link to="/create-post">
              <button>Create Post</button>
            </Link>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  width: 28.8rem;
  margin: 0 auto;

  @media (min-width: 576px) {
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
  }
`;

export default UserDashboard;