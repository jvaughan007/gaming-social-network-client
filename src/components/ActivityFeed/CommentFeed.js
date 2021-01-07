import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import styled from 'styled-components';
import { API_URL } from '../../config';
import { Mention, MentionsInput } from 'react-mentions';


const CommentFeed = ({ entity_id }, reply = false) => {
    const [replying, setReplying] = useState(reply);
    const [comments, setComments] = useState([]);

    const replyToComment = () => {
        return replying === true ? <AddComment /> : null;
    };

    const getComments = async () => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/posts/comments/${entity_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            return setComments(data.comments);
        } catch (err) {
            console.log(err);
            setComments([]);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    const addComment = (comment) => {
        setComments([comment, ...comments]);
    };

    const showComment = (comment, y) => {
        return (
            <div className='each-comment' key={y}>
                <div className='comments-poster'>
                    <span></span>
                    <h1>
                        {comment.username} on post {entity_id}
                    </h1>
                </div>
                <p className='comment-text'>{comment.comment_text}</p>
                {
                <div>
                     <p
                    className='comment-reply'
                    onClick={() => setReplying((r) => !r)}
                >
                    Reply
                </p>
                <div className='reply-input'>{replyToComment()}</div> 
            </div>}
            </div>
        );
    };

    return (
        <StyledWrapper>
            <div className='comment-sect'>
                <AddComment entity_id={entity_id} addComment={addComment} />
                {/* add comment will be static, however there will be many different comments */}
                <div className='comment-feed-sect'>
                    {comments
                        ? comments.map((comment, y) => showComment(comment, y))
                        : null}
                </div>
                {/* <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='users-input'>
                        <MentionsInput
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className='mentions'
                        >
                            <Mention
                                data={users}
                                className='mentions__mention'
                            />
                        </MentionsInput>
                        <button type='submit'>
                            <FaPlus />
                        </button>
                    </div>
                </form>
                </div> */}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .comment-sect {
        width: 95%;
        border-radius: 0.4rem;
        margin: auto;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        background-color: white;

        .comment-feed-sect {
            .each-comment {
                border: solid 1px white;
                border-radius: 0.4rem;
                background-color: white;

                .comments-poster {
                    display: flex;

                    span {
                        width: 2rem;
                        height: 2rem;
                        border: solid 1px black;
                        margin: 2rem 1rem 0rem 2rem;
                    }

                    h1 {
                        font-size: 1.5rem;
                        margin: 2rem 2rem 0 1rem;
                        color: black;
                    }
                }

                .comment-text {
                    padding: 1rem;
                    margin-left: 5rem;
                }

                .comment-reply {
                    color: #9453d3;
                    font-size: 1.3rem;
                    margin-left: 5rem;
                }

                .reply-input {
                    width: 90%;
                    margin: auto;
                }

                .comment-reply-feed {
                    width: 80%;
                    margin: 2rem 0rem 1rem 6rem;
                    .replies-info {
                        display: flex;

                        span {
                            height: 2rem;
                            width: 2rem;
                            border: solid 1px black;
                            margin-right: 1rem;
                        }
                    }

                    .comment-reply-text {
                        padding: 1rem;
                        margin-left: 4rem;
                    }
                }
            }
        }
    }
`;

export default CommentFeed;
