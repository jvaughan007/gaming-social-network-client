import React from 'react';
import AddComment from './AddComment';
import styled from 'styled-components';

const comment = {
    comment: 'Great point dude! You are awesome!',
    entity_id: 1,
    comment_id: 1,
    user_id: 1,
    comments_user: 'Comments user',
};
const CommentFeed = ({ entity_id }) => {
    return (
        <StyledWrapper>
            <div className='comment-sect'>
                <AddComment entity_id={entity_id} />
                <h1>{comment.comments_user}</h1>
                <div>
                    <p>{comment.comment}</p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .comment-sect {
        width: 90%;
        border-radius: 0.4rem;
        margin: auto;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        background-color: white;
    }
`;

export default CommentFeed;
