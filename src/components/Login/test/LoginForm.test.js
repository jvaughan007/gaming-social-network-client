import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

it('LoginForm component renders without crashing', () => {
  shallow(<LoginForm></LoginForm>);
});
