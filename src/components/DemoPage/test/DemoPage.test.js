import React from 'react';
import { shallow } from 'enzyme';
import DemoPage from '../DemoPage';

it('DemoPage component renders without crashing', () => {
  shallow(<DemoPage></DemoPage>);
});