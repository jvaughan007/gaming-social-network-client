import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('App component renders without crashing', () => {
  shallow(<App></App>);
});