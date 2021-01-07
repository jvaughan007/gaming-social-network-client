import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import LoginForm from '../LoginForm';

configure({ adapter: new Adapter() });

it('LoginForm component renders without crashing', () => {
  shallow(
      <LoginForm></LoginForm>
  );
});