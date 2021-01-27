import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserAbout = ({ profile, userIsOwner }) => {
  const user = profile;
  const [edit, setEdit] = useState(false);
  const [about, setAbout] = useState(user.user_bio);
  const [aboutDraft, setAboutDraft] = useState(about);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/profiles/${user.username}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          user_bio: aboutDraft,
          user_id: user.user_id
        })
      });
      const data = await res.json();
      setAbout(data.profile.user_bio);
      return setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdit = () => {
    setAboutDraft(about);
    return setEdit(false);
  };

  const handleEdit = () => {
    if (edit) {
      return (
        <EditAbout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setAboutDraft(e.target.value)}
            defaultValue={aboutDraft}
          ></textarea>
          <div>
            <button type='button' onClick={cancelEdit}>
              Cancel
            </button>
            <button type='submit'>Save</button>
          </div>
        </EditAbout>
      );
    } else {
      return (
        <StyledAbout>
          <p>
            {about && about.trim().length ? (
              about
            ) : (
              <p>Tell us about yourself!</p>
            )}
          </p>
        </StyledAbout>
      );
    }
  };

  return (
    <StyledWrapper>
      <div className='about-body'>
        {handleEdit()}
        <header>
          {userIsOwner === true && !edit ? (
            <button onClick={() => setEdit((c) => !c)}>Edit</button>
          ) : null}
        </header>
      </div>
    </StyledWrapper>
  );
};

const StyledAbout = styled.div`
  max-width: 68rem;
  background: #fff;
  color: black;
  height: 8rem;
  border-radius: 0.4rem;
  padding: 0.8rem;
`;

const StyledWrapper = styled.main`
  padding: 2.4rem 1.6rem 0 1.6rem;

  @media all and (min-width: 970px) {
    padding: 2.4rem 3.2rem 0 3.2rem;
  }

  .about-body {
    color: white;
    width: 100%;

    header {
      display: flex;
      justify-content: flex-end;
      max-width: 68rem;

      button {
        color: white;
        font-size: 1.4rem;
        background: #9453d3;
        outline: none;
        border: none;
        border-radius: 0.4rem;
        height: 4.8rem;
        padding: 0.8rem 2.4rem;
        margin-top: 0.4rem;
        cursor: pointer;
      }
    }
  }
`;

const EditAbout = styled.form`
  max-width: 68rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0.8rem;
      color: white;
      font-size: 1.4rem;
      background: #9453d3;
      outline: none;
      border: none;
      border-radius: 0.4rem;
      height: 4.8rem;
      padding: 0.8rem 2.4rem;
      margin-top: 0.4rem;
      cursor: pointer;
    }
  }

  textarea {
    height: 8rem;
    border-radius: 0.4rem;
    resize: none;
    padding: 0.8rem;
    border: none;
  }
`;

export default UserAbout;
