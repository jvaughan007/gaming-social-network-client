import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import EachFriend from '../EachFriend';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('EachFriend component renders without crashing', () => {
  shallow(<RenderWithRouter><EachFriend></EachFriend></RenderWithRouter>);
});