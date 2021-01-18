import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Games from '../Games';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('Games component renders without crashing', () => {
  shallow(<RenderWithRouter><Games></Games></RenderWithRouter>);
});