import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../SignupForm';

it('SignupForm component renders without crashing', () => {
  shallow(<SignupForm></SignupForm>);
});
