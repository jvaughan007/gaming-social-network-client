import React from 'react';
import { shallow } from 'enzyme';
import CreateGroupForm from '../CreateGroupForm';

it('CreateGroupForm component renders without crashing', () => {
  shallow(<CreateGroupForm></CreateGroupForm>);
});