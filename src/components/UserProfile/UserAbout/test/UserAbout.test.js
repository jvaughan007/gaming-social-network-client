import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import UserAbout from '../UserAbout';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('UserAbout component renders without crashing', () => {
  shallow(<RenderWithRouter><UserAbout></UserAbout></RenderWithRouter>);
});