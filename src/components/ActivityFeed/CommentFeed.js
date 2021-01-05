import React from 'react';
import AddComment from './AddComment';

const comment = {
    comment: 'Great point dude! You are awesome!',
    entity_id: 1,
    comment_id: 1,
    user_id: 1,
    comments_user: 'Comments user',
};
const CommentFeed = ({ entity_id }) => {
    return (
      <div>
       
          <AddComment entity_id={entity_id}/>
          <h1>{comment.comments_user}</h1>
          <div>
            <p>{comment.comment}</p>
          </div>
    
      </div>
    );
};

// const StyledForm = styled.div`
//    {
//     width: 20rem;
//     background-color: blue;
//   }
// `;

export default CommentFeed;
