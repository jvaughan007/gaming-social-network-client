import { useState } from 'react';
import { API_URL } from '../../config';
import styled from 'styled-components';

const CreatePost = ({ addPost, type, group_id, entity_id }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!text.trim().length) {
        return;
      }
      const token = localStorage.getItem('jwt');

      if (type === 'user') {
        const res = await fetch(`${API_URL}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ post_text: text })
        });
        const data = await res.json();
        addPost(data.post);
        return setText('');
      } else if (type === 'group') {
        const res = await fetch(`${API_URL}/groups/${group_id}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ entity_id, post_text: text })
        });
        const data = await res.json();
        addPost(data.post);
        return setText('');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit}>
        <textarea
          type='text'
          placeholder={`What's new?`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button type='submit'>Post</button>
        </div>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  form {
    margin: 2rem auto 3rem auto;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    max-width: 68rem;
    object-fit: contain;

    textarea {
      height: 7rem;
      padding: 0.8rem;
      border-radius: 0.4rem 0.4rem 0 0;
      resize: none;
      outline: none;
      border: none;
    }
    div {
      height: 5.6rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: #212121;
      padding: 0.8rem;
      color: #fff;
      border-radius: 0 0 0.4rem 0.4rem;
      border-top: 1px solid #000;

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
export default CreatePost;
