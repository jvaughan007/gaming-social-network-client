import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Mention, MentionsInput } from 'react-mentions';

const users = [
    {
        id: 1,
        display: 'donovan',
    },
    {
        id: 2,
        display: 'josh',
    },
];

const AddComment = ({ entity_id }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //   if (!comment.trim().length) {
        //     return;
        //   }
        //   const token = localStorage.getItem("jwt");
        //   const res = await fetch(`${API_URL}/posts`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       authorization: `Bearer ${token}`,
        //     },
        //     body: JSON.stringify({ post_text: text }),
        //   });
        //   const data = await res.json();
        //   addPost(data.post);
        //   return setText("");
        // } catch (err) {
        //   console.log(err);
        //   // handle error here
        // }
    };

    return (
        <StyledWrapper>
            <div className='add-comment-form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {/* need to haves: entity_id , comment_text: comment,   */}
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
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .add-comment-form {
        width: 100%;
        padding-top: 2.5rem;
        color: white;

        .users-input {
            display: flex;
            width: 90%;
            height: 4rem;
            margin: auto;
            border: solid 1px gray;

            .mentions {
                width: 100%;
                border: none;
                padding-left: 1rem;
                color: black;
            }
            .mentions--singleLine .mentions__control {
                padding-left: 1rem;
                display: inline-block;
            }
            .mentions--singleLine .mentions__higlighter {
                padding: 1px;
                border: 2px inset transparent;
            }
            .mentions--singleLine .mentions__input {
                padding: 5px;
                border: 2px inset;
            }
            .mentions__suggestions__list {
                background-color: #9453d3;
                border: 1px solid rgba(0, 0, 0, 0.15);
                font-size: 2rem;
                color: white;
            }
            .mentions__suggestions__item {
                padding: 5px 15px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.15);
            }
            button {
                border: none;
                border-left: solid 1px gray;
                width: 5rem;
            }
        }
    }
`;

export default AddComment;
