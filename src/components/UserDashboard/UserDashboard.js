import VertNavBar from "../VerticalNavBar/VertNavBar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserDashboard = () => {
  return (
    <>
      <StyledWrapper>
        <StyledFeed className="dashboard-content">
            <FeedContent>
              {/* feed posts mapped over didMount array of post with objects post*/}
            </FeedContent>
            <StyledFeed>
      </StyledWrapper>
    </>
  );
};

const StyledFeed = styled.div`
  width:  80%;
  background-color: aqua;
  height: 202px;
  border: 1px;
  border-color: black;
  `
const FeedContent = styled.div`
  color: blue;
  `

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