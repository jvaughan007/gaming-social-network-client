import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNav>
      <button className='mobile-nav-btn'>
        <FaBars />
      </button>

      <div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav``;

export default NavBar;
