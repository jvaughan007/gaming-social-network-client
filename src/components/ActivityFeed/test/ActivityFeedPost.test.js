import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import ActivityFeedPost from '../ActivityFeedPost';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('ActivityFeedPost component renders without crashing', () => {
  shallow(<RenderWithRouter><ActivityFeedPost></ActivityFeedPost></RenderWithRouter>);
});