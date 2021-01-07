import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import SignupForm from '../SignupForm';

configure({ adapter: new Adapter() });

it('SignupForm component renders without crashing', () => {
  shallow(
      <SignupForm></SignupForm>
  );
});