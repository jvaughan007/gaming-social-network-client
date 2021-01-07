import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Signup from '../Signup';

configure({ adapter: new Adapter() });

it('Signup component renders without crashing', () => {
  shallow(
      <Signup></Signup>
  );
});