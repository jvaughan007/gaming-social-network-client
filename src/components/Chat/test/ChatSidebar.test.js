import React from 'react';
import { shallow } from 'enzyme';
import ChatSidebar from '../ChatSidebar';

it('ChatSidebar component renders without crashing', () => {
  shallow(<ChatSidebar></ChatSidebar>);
});