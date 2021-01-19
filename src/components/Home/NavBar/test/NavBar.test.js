import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

it('NavBar component renders without crashing', () => {
  shallow(<NavBar></NavBar>);
});