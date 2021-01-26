import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './AddComment';
import styled from 'styled-components';
import { API_URL } from '../../config';
import moment from 'moment';

const CommentFeed = ({ entity_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const res = await fetch(`${API_URL}/posts/comments/${entity_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        return setComments(data.comments);
      } catch (err) {
        setComments([]);
      }
    };
    getComments();
  }, [entity_id]);

  const addComment = (comment) => {
    setComments([comment, ...comments]);
  };

  const displayComment = (comment, idx) => {
    return (
      <div className='comment' key={idx}>
        <div className='comment-owner-info'>
          <img src={comment.profile_url} alt='User Avatar' />
        </div>
        <div className='comment-text'>
          <Link to={`/${comment.username}`}>
            <h3>
              {comment.username}{' '}
              <span>
                {moment(new Date(comment.created_at), 'YYYYMMDD').fromNow()}
              </span>
            </h3>
          </Link>
          <p>{comment.comment_text}</p>
        </div>
      </div>
    );
  };

  return (
    <StyledMain>
      <AddComment entity_id={entity_id} addComment={addComment} />
      <StyledComments>
        {comments
          ? comments.map((comment, idx) => displayComment(comment, idx))
          : null}
      </StyledComments>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  max-width: 68rem;
  margin: 0 auto;
  border-radius: 0.4rem;
  margin: 0.8rem auto 0 auto;
  background: #131b21;
  padding: 0.8rem;
`;

const StyledComments = styled.div`
  .comment {
    border-radius: 0.4rem;
    display: flex;
    margin-bottom: 1.6rem;

    :last-child {
      margin-bottom: 0;
    }
  }

  .comment-owner-info {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      border: 0.1rem solid #fff;
    }
  }

  .comment-text {
    padding: 0.8rem;
    border-radius: 0.4rem;
    margin-left: 1.6rem;

    h3 {
      font-weight: 400;
      color: #0d7377;

      span {
        font-size: 1.2rem;
        color: #131b21;
      }

      margin-bottom: 0.8rem;
    }

    background: #fff;
    width: 100%;
  }
`;

export default CommentFeed;
