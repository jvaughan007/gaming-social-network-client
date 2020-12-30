import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignupForm from './SignupForm';
import mobileImage from './images/takehiro.jpg';
import desktopImage from './images/ella-don.jpg';

const Signup = () => {
  return (
    <>
      <StyledMain>
        <div className='signup-image'></div>
        <div className='signup-page'>
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
          <div>
            <SignupForm></SignupForm>
            <Link to='/login'>
              Already have an account? <span>Login here</span>
            </Link>
          </div>
        </div>
      </StyledMain>
    </>
  );
};

const StyledMain = styled.main`
  color: #fff;

  .signup-image {
    background-image: url(${mobileImage});
    background-size: cover;
    background-position: -8rem 0rem;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1000;
    background-color: inherit;
    opacity: 0.2;
  }

  .signup-page {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 8rem;
    grid-gap: 3.2rem;

    a {
      display: block;
      margin-top: 3.2rem;
      text-align: center;
      cursor: pointer;
      font-weight: 700;

      span {
        color: #9453d3;
      }
    }

    div {
      width: 100%;
    }

    div:first-child {
      h1 {
        margin-bottom: 2.4rem;
        font-size: 2.4rem;
      }

      ul {
        li {
          margin-bottom: 0.8rem;

          span {
            margin-right: 0.8rem;
            border-radius: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .signup-image {
      background-image: url(${desktopImage});
      background-size: cover;
      background-position: 0rem 0rem;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1000;
    }

    .signup-page {
      grid-template-columns: repeat(2, 1fr);
      margin: 0;
      height: 100vh;
      align-items: center;
      justify-items: center;
      grid-gap: 4.8rem;

      div:first-child {
        h1 {
          font-size: 3.2rem;
        }
      }
    }
  }
`;

export default Signup;
