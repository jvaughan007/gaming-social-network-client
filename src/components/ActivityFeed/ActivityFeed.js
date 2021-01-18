import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';
import ActivityFeedPost from './ActivityFeedPost';
import CreatePost from './CreatePost';

// @TODO - Format timestamps with date-fns

const ActivityFeed = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      localStorage.setItem('username', data.posts[0].username);
      return setPosts(data.posts);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const addPost = (post) => {
    return setPosts([post, ...posts]);
  };

  return (
    <StyledWrapper>
      <div className='activity-feed-wrapper'>
        <CreatePost addPost={addPost} />
        <ul>
          {posts
            ? posts.map((post, y) => (
                <ActivityFeedPost post={post} key={y}></ActivityFeedPost>
              ))
            : null}
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  .activity-feed-wrapper {
    width: 100%;
    position: absolute;
    left: 0rem;
    padding: 1rem;
  }

  @media all and (min-width: 700px) {
    .activity-feed-wrapper {
      width: 70%;
      left: 15%;
    }
  }
`;

export default ActivityFeed;
