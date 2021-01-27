import React from 'react';
import { shallow } from 'enzyme';
import ActivityFeed from '../ActivityFeed';

it('ActivityFeed component renders without crashing', () => {
  shallow(<ActivityFeed></ActivityFeed>);
});