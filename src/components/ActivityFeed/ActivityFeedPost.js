import ellipseIcon from './images/more-horizontal.svg';
import commentIcon from './images/message-square.svg';
import likeIcon from './images/thumbs-up.svg';
import React, { useState } from 'react';
import CommentFeed from './CommentFeed';
import styled from 'styled-components';

const ActivityFeedPost = ({ post, time }, showCommentsBool = false) => {
  const [showComments, setShowComments] = useState(showCommentsBool);
  const [likes, setLikes] = useState(0);

  const timestamp = new Date(time);

  console.log(timestamp);

  const handleDisplayUsername = () => {
    if (post.username === localStorage.getItem('username')) {
      return <h3>You</h3>;
    } else {
      return <h3>{post.username}</h3>;
    }
  };
  return (
    <div>
      <StyledWrapper>
        <li key={post.entity_id}>
          <img src={ellipseIcon} alt='More Options' className='ellipse' />
          <div className='post-user-info'>
            <img
              src='https://gaming-social-network.s3-us-west-2.amazonaws.com/avatar_placeholder.png'
              alt='Avatar'
              className='avatar'
            ></img>
            {handleDisplayUsername()}
            <span className='created-at'>Posted ago</span>
          </div>
          <div className='post-content'>
            <p>{post.post_text}</p>
          </div>
          <div className='user-interactions'>
            <div>
              <span>{likes !== 0 ? likes : null}</span>
              <img
                src={likeIcon}
                alt='Like'
                onClick={() => setLikes((likes) => likes + 1)}
              />
              <span onClick={() => setShowComments((c) => !c)}>
                <img src={commentIcon} alt='Comment' />
              </span>
            </div>
          </div>
        </li>
      </StyledWrapper>
      {showComments === true ? (
        <CommentFeed entity_id={post.entity_id} />
      ) : null}
    </div>
  );
};

const StyledWrapper = styled.main`
  li {
    margin: 0 auto;
    position: relative;
    background-color: white;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 2.4rem;
    margin-top: 3rem;
    max-width: 68rem;

    .ellipse {
      position: absolute;
      top: 0.8rem;
      right: 1.6rem;
      cursor: pointer;
    }
    .post-user-info {
      display: flex;
      align-items: center;
      h3 {
        color: #203758;
        font-size: 1.5rem;
      }
      .avatar {
        border: 2rem;
        border-color: #212121;
        border-radius: 10rem;
        height: 3.8rem;
        margin-right: 0.8rem;
        width: 3.8rem;
      }
      .created-at {
        margin-left: 2rem;
      }
    }
    .post-content {
      p {
        margin-top: 1.6rem;
        padding-left: 5rem;
        width: 100%;
        color: #203758, 100%;
        line-height: 2rem;
        size: 1.4rem;
      }
    }
    .user-interactions {
      position: absolute;
      bottom: 0.8rem;
      right: 1.6rem;
      img {
        margin-left: 0.8rem;
        cursor: pointer;
      }
    }
  }
`;

export default ActivityFeedPost;
