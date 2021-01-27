import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import AddComment from '../AddComment';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('AddComment component renders without crashing', () => {
  shallow(<RenderWithRouter><AddComment></AddComment></RenderWithRouter>);
});