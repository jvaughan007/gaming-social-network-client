import React from 'react';
import { shallow } from 'enzyme';
import NavBarContents from '../NavBarContents';

it('NavBarContents component renders without crashing', () => {
  shallow(<NavBarContents></NavBarContents>);
});