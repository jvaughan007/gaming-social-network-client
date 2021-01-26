import React from 'react';
import styled from 'styled-components';
import NavContent from './SidebarContents';

import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <StyledMain>
      <div className='mobile-view'>
        <Menu width={'20rem'}>
          <NavContent />
        </Menu>
      </div>
      <div className='desktop-view'>
        <NavContent />
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  .desktop-view {
    display: none;
  }
  .mobile-view {
    display: block;
  }
  .bm-burger-button {
    position: fixed;
    width: 2.5rem;
    height: 2rem;
    left: 1rem;
    top: 1rem;
  }
  .bm-burger-bars {
    background: #fff;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
    z-index: 1000;
  }

  .bm-cross {
    background: #212121;
  }

  @media all and (min-width: 970px) {
    .bm-burger-button {
      width: 3.5rem;
      height: 3rem;
      left: 2rem;
      top: 1rem;
    }

    .mobile-view {
      display: none;
    }

    .desktop-view {
      display: block;
    }
  }
`;

export default Sidebar;
