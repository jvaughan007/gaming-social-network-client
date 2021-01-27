import React from 'react';
import { shallow } from 'enzyme';
import UserDashboard from '../UserDashboard';

it('UserDashboard component renders without crashing', () => {
  shallow(<UserDashboard></UserDashboard>);
});