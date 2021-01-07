import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Login from '../Login';

configure({ adapter: new Adapter() });

it('Login component renders without crashing', () => {
  shallow(
      <Login></Login>
  );
});