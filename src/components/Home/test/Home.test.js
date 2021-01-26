import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

it('Home component renders without crashing', () => {
  shallow(<Home></Home>);
});
