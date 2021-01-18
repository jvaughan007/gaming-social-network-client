import React from 'react';
import { shallow } from 'enzyme';
import ChatWindow from '../ChatWindow';

it('ChatWindow component renders without crashing', () => {
  shallow(<ChatWindow></ChatWindow>);
});