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
        <StyledFeed className='dashboard-content'>
            <CreatePost addPost={addPost} />
            <FeedContent>
                {posts.map((post) => (
                    <ActivityFeedPost post={post}></ActivityFeedPost>
                ))}
            </FeedContent>
        </StyledFeed>
    ) : null;
};


const StyledFeed = styled.div`
    padding-top: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0d7377;

    form {
        width: 78rem;
        display: flex;
        flex-direction: column;

        textarea {
            width: 100%;
            height: 12rem;
            padding: 0.8rem;
            border-radius: 0.4rem 0.4rem 0 0;
            resize: none;
            outline: none;
        }

        div {
            height: 5.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #212121;
            padding: 0.8rem;
            color: #fff;
            border-radius: 0 0 0.4rem 0.4rem;

            ul {
                display: flex;
                li {
                    margin-right: 0.8rem;
                    cursor: pointer;
                }
            }

            button {
                height: 4rem;
                border-radius: 0.4rem;
                width: 8rem;
                cursor: pointer;
                outline: none;
                border: none;
                color: #fff;
                background: #9453d3;
            }
        }
    }
`;

const FeedContent = styled.ul`
    padding: 2.4rem;
    height: 100%;

    li {
        position: relative;
        background-color: white;
        border-radius: 0.4rem;
        display: flex;
        flex-direction: column;
        height: 20rem;
        margin-bottom: 2.4rem;
        padding: 3.2rem;
        width: 78rem;

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
            }

            .avatar {
                border: 2rem;
                border-color: #212121;
                border-radius: 10rem;
                height: 4.8rem;
                margin-right: 0.8rem;
                width: 4.8rem;
            }
        }

        .post-content {
            p {
                margin-top: 1.6rem;
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
// 1rem = 10px

const StyledMain = styled.main`
    /* width: 28.8rem;
  margin: 0 auto; */

    /* @media (min-width: 576px) {
    width: 50rem;
  }

  @media (min-width: 768px) {
    width: 70rem;
  }

  @media (min-width: 992px) {
    width: 90rem;
  }

  @media (min-width: 1200px) {
    width: 112rem;
  } */
`;

export default ActivityFeed;
