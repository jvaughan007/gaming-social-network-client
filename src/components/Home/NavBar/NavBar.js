import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNav>
      <ul className='nav-links'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 1.6rem;
  left: 0;
  padding-right: 1.6rem;

  ul {
    display: flex;
    align-items: center;

    li {
      margin-left: 2.4rem;
      cursor: pointer;
      color: #fff;
      font-family: 'Rubik', sans-serif;

      :last-child {
        background-color: #0d7377;
        padding: 0.8rem 2.4rem;
        border-radius: 0.4rem;
      }
    }
  }
`;

export default NavBar;
