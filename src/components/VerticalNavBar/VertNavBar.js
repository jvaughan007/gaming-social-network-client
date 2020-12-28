import React from 'react';
import styled from 'styled-components';

const VertNavBar = () => {
  return (
    <StyledMain>
      <div>
        <div className='side-bar'>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Donovan is cool</a>
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
