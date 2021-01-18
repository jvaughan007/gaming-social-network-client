import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import UserFriends from '../UserFriends';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('UserFriends component renders without crashing', () => {
  shallow(<RenderWithRouter><UserFriends></UserFriends></RenderWithRouter>);
});