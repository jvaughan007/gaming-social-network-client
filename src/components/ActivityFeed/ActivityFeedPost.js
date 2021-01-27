import commentIcon from './images/message-square.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CommentFeed from './CommentFeed';
import styled from 'styled-components';
import moment from 'moment';

const ActivityFeedPost = ({ post, time }, showCommentsBool = false) => {
  const [showComments, setShowComments] = useState(showCommentsBool);

  const handleDisplayUsername = () => {
    if (post.username === localStorage.getItem('username')) {
      return (
        <Link to={`/${post.username}`}>
          <h3>You</h3>
        </Link>
      );
    } else {
      return (
        <Link to={`/${post.username}`}>
          <h3>{post.username}</h3>
        </Link>
      );
    }
  };
  return (
    <div>
      <StyledWrapper>
        <li key={post.entity_id}>
          <div className='post-user-info'>
            <img
              src={
                post.profile_url
                  ? post.profile_url
                  : 'https://gaming-social-network.s3-us-west-2.amazonaws.com/avatar_placeholder.png'
              }
              alt='Avatar'
              className='avatar'
            ></img>
            {handleDisplayUsername()}
            <span className='created-at'>
              Posted {moment(new Date(time), 'YYYYMMDD').fromNow()}
            </span>
          </div>
          <div className='post-content'>
            <p>{post.post_text}</p>
          </div>
          <div className='user-interactions'>
            <div>
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
        font-size: 1.4rem;
        margin-left: 0.8rem;
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
