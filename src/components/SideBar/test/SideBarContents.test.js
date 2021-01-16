import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import SideBarContents from '../SideBarContents';

const mockStore = configureMockStore();
const store = mockStore({ auth: { user: true } });

it('SideBarContents component renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <SideBarContents></SideBarContents>
    </Provider>
  );
});
