import ellipseIcon from './images/more-horizontal.svg';
import commentIcon from './images/message-square.svg';
import likeIcon from './images/thumbs-up.svg';
import React from 'react';
import CommentFeed from './CommentFeed';

const ActivityFeedPost = ({ post }) => {
    return (
        <div>
            <li key={post.entity_id}>
                <img src={ellipseIcon} alt='More Options' className='ellipse' />
                <div className='post-user-info'>
                    <img
                        src='https://gaming-social-network.s3-us-west-2.amazonaws.com/avatar_placeholder.png'
                        alt='Avatar'
                        className='avatar'
                    ></img>
                    <h3>{post.username}</h3>
                </div>
                <div className='post-content'>
                    <p>{post.post_text}</p>
                </div>
                <div className='user-interactions'>
                    <div>
                        <img src={likeIcon} alt='Like' />
                        <span>
                            <img src={commentIcon} alt='Comment' />
                        </span>
                    </div>
                </div>
            </li>
            <CommentFeed />
        </div>
    );
};

export default ActivityFeedPost;
