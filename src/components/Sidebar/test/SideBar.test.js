import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

it('SideBar component renders without crashing', () => {
  shallow(<Sidebar></Sidebar>);
});
