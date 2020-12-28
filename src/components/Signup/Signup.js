import styled from 'styled-components';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <StyledMain>
      <div>
        <h1>Join the best gaming community in the world!</h1>
        <ul>
          <li>
            <span>-</span>Create your own gamer profile
          </li>
          <li>
            <span>-</span>Find and connect with gaming groups
          </li>
          <li>
            <span>-</span>Connect with gamers that share your
          </li>
          <li>
            <span>-</span>Share your gaming accomplishments with the world
          </li>
        </ul>
      </div>
      <SignupForm></SignupForm>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-gap: 4.8rem;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  align-items: center;
  justify-items: center;

  div {
    width: 100%;

    h1 {
      color: #fff;
      margin-bottom: 4.8rem;
    }

    ul {
      color: #fff;

      li {
        margin-bottom: 0.8rem;
        font-size: 1.8rem;

        span {
          margin-right: 0.8rem;
        }
      }
    }
  }
`;

export default Signup;
