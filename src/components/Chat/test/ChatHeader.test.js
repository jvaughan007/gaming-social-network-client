import React from 'react';
import { shallow } from 'enzyme';
import ChatHeader from '../ChatHeader';

it('ChatHeader component renders without crashing', () => {
  shallow(<ChatHeader></ChatHeader>);
});