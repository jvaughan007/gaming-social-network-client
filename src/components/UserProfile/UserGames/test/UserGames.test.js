import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import UserGames from '../UserGames';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('UserGames component renders without crashing', () => {
  shallow(<RenderWithRouter><UserGames></UserGames></RenderWithRouter>);
});