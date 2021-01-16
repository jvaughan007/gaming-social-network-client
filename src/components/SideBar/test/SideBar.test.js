import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../SideBar';

it('SideBar component renders without crashing', () => {
  shallow(<SideBar></SideBar>);
});