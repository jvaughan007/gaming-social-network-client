import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Game from '../Game';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('Game component renders without crashing', () => {
  shallow(<RenderWithRouter><Game></Game></RenderWithRouter>);
});