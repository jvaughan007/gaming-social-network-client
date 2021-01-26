import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Group from '../Group';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('Group component renders without crashing', () => {
  shallow(<RenderWithRouter><Group></Group></RenderWithRouter>);
});