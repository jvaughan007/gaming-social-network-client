import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../Signup';

it('Signup component renders without crashing', () => {
  shallow(<Signup></Signup>);
});
