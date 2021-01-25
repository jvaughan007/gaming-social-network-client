import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';
import ActivityFeedPost from './ActivityFeedPost';
import CreatePost from './CreatePost';

const ActivityFeed = () => {
    const [posts, setPosts] = useState(null);

    const getPosts = async () => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/posts/allPosts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            console.log(data);
            return setPosts(data);
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
                              <ActivityFeedPost
                                  post={post}
                                  key={y}
                                  time={post.created_at}
                              ></ActivityFeedPost>
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
        padding: 1rem;
    }

    @media all and (min-width: 700px) {
        .activity-feed-wrapper {
            width: 70%;
            margin-left: 20%;
        }
    }
`;

export default ActivityFeed;
