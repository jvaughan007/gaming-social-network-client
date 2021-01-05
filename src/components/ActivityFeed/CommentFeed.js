import React from 'react';
import AddComment from './AddComment';

const comment = {
    comment: 'aslkndskal',
    entity_id: 1,
    comment_id: 1,
    user_id: 1,
    comments_user: 'Comments user',
};
const CommentFeed = () => {
    return (
        <div>
            <AddComment />
            <h1>{comment.comments_user}</h1>
            <div>
                <p>{comment.comment}</p>
            </div>
        </div>
    );
};

export default CommentFeed;
