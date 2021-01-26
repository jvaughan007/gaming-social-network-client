import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import CommentFeed from '../CommentFeed';

const RenderWithRouter = ({children}) => (
    <MemoryRouter><Route>{children}</Route></MemoryRouter>
) 

it('CommentFeed component renders without crashing', () => {
  shallow(<RenderWithRouter><CommentFeed></CommentFeed></RenderWithRouter>);
});