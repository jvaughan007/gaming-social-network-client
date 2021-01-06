import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';
import ActivityFeedPost from './ActivityFeedPost';
import CreatePost from './CreatePost';

const ActivityFeed = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const token = localStorage.getItem('jwt');
                const res = await fetch(`${API_URL}/posts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                console.log(data);
                return setPosts(data.posts);
            } catch (err) {
                console.log(err);
                setPosts([]);
            }
        };
        getPosts();
    }, []);

    const addPost = (post) => {
        return setPosts([post, ...posts]);
    };

    return posts ? (
        <StyledWrapper>
            <div className='activity-feed-wrapper'>
                <CreatePost addPost={addPost} />
                <ul>
                    {posts.map((post, y) => (
                        <ActivityFeedPost
                            post={post}
                            key={y}
                        ></ActivityFeedPost>
                    ))}
                </ul>
            </div>
        </StyledWrapper>
    ) : null;
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
