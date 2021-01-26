import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaGamepad,
  FaIdBadge,
  FaPowerOff
} from 'react-icons/fa';
import { logout } from '../../store/actions/authActions';
import styled from 'styled-components';

const SidebarContents = () => {
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logout()), [dispatch]);
  let history = useHistory();

  const onLogoutClick = () => {
    logoutUser();
    return history.push('/');
  };

  return (
    <StyledNav>
      <div className='top-nav'>
        <Link to='/dashboard'>
          <h1>GSN</h1>
        </Link>

        <ul className='user-links'>
          <li>
            <Link to='/dashboard'>
              <FaHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={`/${username}`}>
              <FaIdBadge />
              <span>Profile</span>
            </Link>
          </li>
        </ul>

        <h2>Connect</h2>
        <ul className='connect-links'>
          <li>
            <Link to='/groups'>
              <FaUsers />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link to='/games'>
              <FaGamepad />
              <span>Games</span>
            </Link>
          </li>
        </ul>

        <h2>Create</h2>
        <ul className='create-links'>
          <li>
            <Link to='/groups/new'>
              <FaUsers />
              <span>Create New Group</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='bottom-nav'>
        <button onClick={onLogoutClick}>
          <FaPowerOff />
          <span>Logout</span>
        </button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 20rem;
  height: 100vh;
  position: fixed;
  background-color: #fff;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding-left: 1.6rem;
  padding-top: 2.4rem;

  .top-nav {
    h1 {
      font-size: 4.8rem;
      font-weight: 300;
    }

    h2 {
      margin-top: 2.4rem;
      font-size: 2.2rem;
      margin-bottom: 0.8rem;
      font-weight: 500;
    }

    ul li a {
      display: flex;
      align-items: center;
      font-weight: 300;

      :hover {
        color: #9453d3;
      }
    }

    ul li:not(:first-child) {
      margin-top: 1.6rem;
    }

    ul li span {
      margin-left: 0.8rem;
    }

    .user-links {
      margin-top: 2.4rem;
      font-size: 2rem;
    }

    .connect-links {
      font-size: 2rem;
    }

    .create-links {
      font-size: 1.8rem;
    }
  }

  .bottom-nav {
    button {
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      background: none;
      color: #e31c3d;
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
      cursor: pointer;
      span {
        margin-left: 0.8rem;
      }
    }
  }
`;

export default SidebarContents;
