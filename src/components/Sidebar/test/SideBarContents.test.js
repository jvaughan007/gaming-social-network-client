import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import SidebarContents from '../SidebarContents';

const mockStore = configureMockStore();
const store = mockStore({ auth: { user: true } });

it('Sidebar Contents component renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <SidebarContents></SidebarContents>
    </Provider>
  );
});
