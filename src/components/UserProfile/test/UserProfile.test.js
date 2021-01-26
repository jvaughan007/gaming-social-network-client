import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import UserProfile from '../UserProfile';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('UserProfile component renders without crashing', () => {
  shallow(<RenderWithRouter><UserProfile></UserProfile></RenderWithRouter>);
});