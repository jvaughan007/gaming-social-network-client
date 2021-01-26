import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import UserImages from '../UserImages';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('UserImages component renders without crashing', () => {
  shallow(<RenderWithRouter><UserImages></UserImages></RenderWithRouter>);
});