import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 20rem;
    background-color: yellow;
    height: 100%;
    position: fixed;
    overflow: auto;
  }
  li a {
    display: block;
    color: black;
    padding: 0.8rem 1.4rem;
  }
`;

export default VertNavBar;
