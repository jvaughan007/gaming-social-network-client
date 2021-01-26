import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../Popup';

it('Popup component renders without crashing', () => {
  shallow(<Popup></Popup>);
});