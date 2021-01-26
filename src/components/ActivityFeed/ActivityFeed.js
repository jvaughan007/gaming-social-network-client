import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';
import ActivityFeedPost from './ActivityFeedPost';
import CreatePost from './CreatePost';

const ActivityFeed = ({ type, canPost, group_id, entity_id, colorMode }) => {
  const [posts, setPosts] = useState([]);
  const getGroupPosts = useCallback(async () => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/groups/${group_id}/posts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      return setPosts(data.posts);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  }, [group_id]);
  const getUserPosts = useCallback(async () => {
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
      return setPosts(data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    if (type === 'user') {
      getUserPosts();
    } else if (type === 'group') {
      getGroupPosts();
    }
  }, [type, getGroupPosts, getUserPosts]);

  const addPost = (post) => {
    return setPosts([post, ...posts]);
  };

  const renderPostForm = () => {
    if (canPost && type === 'user') {
      return (
        <CreatePost
          addPost={addPost}
          type={type}
          group_id={group_id}
          entity_id={entity_id}
          colorMode={colorMode}
        />
      );
    } else if (canPost && type === 'group') {
      return (
        <CreatePost
          addPost={addPost}
          type={type}
          group_id={group_id}
          entity_id={entity_id}
          colorMode={colorMode}
        />
      );
    } else {
      if (!canPost && type === 'group') {
        return (
          <div class='can-post'>
            <h3>You must be a member of this group to be able to post.</h3>
          </div>
        );
      } else if (!canPost && type === 'user') {
        <div class='can-post'>
          <h3>You're not allowed to post here.</h3>
        </div>;
      }
    }
  };

  return (
    <StyledMain>
      {renderPostForm()}
      <ul>
        {posts
          ? posts.map((post, idx) => (
              <ActivityFeedPost
                post={post}
                key={idx}
                time={post.created_at}
              ></ActivityFeedPost>
            ))
          : null}
      </ul>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  .can-post {
    max-width: 68rem;
    height: 12rem;
    border-radius: 0.4rem;
    background: #e31c3d;
    margin: 2.4rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }

  @media all and (max-width: 970px) {
    padding: 0 1.6rem;
  }
`;

export default ActivityFeed;
