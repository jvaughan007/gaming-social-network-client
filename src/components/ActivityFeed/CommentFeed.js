import React, { useState } from 'react';
import AddComment from './AddComment';
import styled from 'styled-components';

const comment = {
    comment_text: 'Great point dude! You are awesome!',
    entity_id: 1,
    comment_id: 1,
    user_id: 1,
    comments_user: 'Comments user',
    replies: {
        reply_text: 'Great comment dude! This comment is awesome!',
        entity_id: 1,
        user_id: 2,
        replying_to: 1,
        replies_user: 'The replier',
    },
};

const CommentFeed = ({ entity_id }, reply = false) => {
    const [replying, setReplying] = useState(reply);

    const replyToComment = () => {
        return replying === true ? <AddComment /> : null;
    };

    const getNestedComments = () => {
        if (comment.replies) {
            return (
                <div className='comment-reply-feed'>
                    <div className='replies-info'>
                        <span></span>
                        <h2>{comment.replies.replies_user}</h2>
                    </div>
                    <p className='comment-reply-text'>
                        {comment.replies.reply_text}
                    </p>
                </div>
            );
        }
    };

    return (
        <StyledWrapper>
            <div className='comment-sect'>
                <AddComment entity_id={entity_id} />
                {/* add comment will be static, however there will be many different comments */}
                <div className='comment-feed-sect'>
                    <div className='each-comment'>
                        <div className='comments-poster'>
                            <span></span>
                            <h1>
                                {comment.comments_user} on post {entity_id}
                            </h1>
                        </div>
                        <p className='comment-text'>{comment.comment_text}</p>
                        <p
                            className='comment-reply'
                            onClick={() => setReplying((r) => !r)}
                        >
                            Reply
                        </p>
                        <div className='reply-input'> {replyToComment()}</div>
                        {getNestedComments()}
                    </div>
                </div>
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
                    margin-left: 6rem;
                    margin-top: 2rem;
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
