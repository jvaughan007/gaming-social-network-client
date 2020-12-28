import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaHome,
  FaSortDown,
  FaUsers,
  FaSms,
  FaUserFriends,
  FaGamepad
} from 'react-icons/fa';

const VertNavBar = () => {
  return (
    <StyledMain>
      <div>
        <div className='side-bar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>News</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Donovan is cool</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  .side-bar {
    width: 19rem;
    height: 100%;
    position: fixed;
    overflow: auto;
    background-color: #323232;

    .logo {
      display: flex;

      span {
        border: solid 1px white;
        margin: 2rem;
      }

      .nav-title {
        color: white;
        margin: 1.5rem;
        margin-right: 0;
        border: none;
        font-size: 4rem;
        transition: 0.5s;
      }
    }

    .search-field {
      text-align: center;

      input {
        width: 16rem;
        margin: auto;
      }
    }

    button {
      border: none;
      background: transparent;
      color: white;
      width: 16rem;
      text-align: left;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 10rem;
      transition: 0.6s;
    }

    button:hover {
      background-color: #0d7377;
      transition: 0.4s;
    }

    .home-btn {
      margin-top: 2rem;
      margin-left: 1rem;
    }

    .home {
      font-size: 2.2rem;
      margin-left: 1rem;
    }

    .dropdown {
      font-size: 2rem;
      margin-top: 2.5rem;
      margin-left: 1rem;

      .nav-category {
        color: white;
      }

      .dropdown-content {
        button {
          text-align: left;
          margin-top: 1rem;
          font-size: 1.5rem;
        }
      }

      .dd-label {
        margin-left: 1rem;
      }
    }
  }
`;

export default VertNavBar;
