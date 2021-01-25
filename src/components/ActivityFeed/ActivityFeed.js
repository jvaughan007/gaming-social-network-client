import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';
import ActivityFeedPost from './ActivityFeedPost';
import CreatePost from './CreatePost';

const ActivityFeed = ({ type }) => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/posts/allPosts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      console.log(data);
      return setPosts(data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  const getGroupPosts = async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/posts/allPosts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      console.log(data);
      //   return setPosts(data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  useEffect(() => {
    if (type === 'user') {
      getPosts();
    } else if (type === 'group') {
      getGroupPosts();
    }
  }, [type]);

  const addPost = (post) => {
    return setPosts([post, ...posts]);
  };

  return (
    <StyledMain>
      <CreatePost addPost={addPost} />
      <ul>
        {posts
          ? posts.map((post, y) => (
              <ActivityFeedPost
                post={post}
                key={y}
                time={post.created_at}
              ></ActivityFeedPost>
            ))
          : null}
      </ul>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  @media all and (max-width: 970px) {
    padding: 0 1.6rem;
  }
`;

export default ActivityFeed;
