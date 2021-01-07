import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

it('Login component renders without crashing', () => {
  shallow(<Login></Login>);
});
