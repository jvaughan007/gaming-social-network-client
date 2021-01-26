import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../config';

const AddComment = ({ entity_id, addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!comment.trim().length) {
        return;
      }
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ comment_text: comment, entity_id })
      });
      const data = await res.json();
      addComment(data.comment);
      return setComment('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='mentions'
      />
      <button type='submit'>Reply</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  height: 4.8rem;
  margin-bottom: 2.4rem;
  justify-content: space-between;

  input {
    width: 90%;
    border-radius: 0.4rem;
    outline: none;
    border: none;
  }

  button {
    width: 9%;
    border-radius: 0.4rem;
    outline: none;
    border: none;
    background: #9453d3;
    color: #fff;
  }
`;

export default AddComment;
