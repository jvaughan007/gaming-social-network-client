import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../Chat';

it('Chat component renders without crashing', () => {
  shallow(<Chat></Chat>);
});