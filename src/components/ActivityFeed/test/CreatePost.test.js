import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import CreatePost from '../CreatePost';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('CreatePost component renders without crashing', () => {
  shallow(<RenderWithRouter><CreatePost></CreatePost></RenderWithRouter>);
});