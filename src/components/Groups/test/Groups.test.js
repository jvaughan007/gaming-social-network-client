import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Groups from '../Groups';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('Groups component renders without crashing', () => {
  shallow(<RenderWithRouter><Groups></Groups></RenderWithRouter>);
});