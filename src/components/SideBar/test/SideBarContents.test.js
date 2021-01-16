import React from 'react';
import { shallow } from 'enzyme';
import SideBarContents from '../SideBarContents';

it('SideBarContents component renders without crashing', () => {
  shallow(<SideBarContents></SideBarContents>);
});