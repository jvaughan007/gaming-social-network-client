import React from 'react';
import { shallow } from 'enzyme';
import CreateGroup from '../CreateGroup';

it('CreateGroup component renders without crashing', () => {
  shallow(<CreateGroup></CreateGroup>);
});