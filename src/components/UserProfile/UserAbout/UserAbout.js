import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';

const UserAbout = ({ profile, userIsOwner }) => {
  const user = profile;
  const [edit, setEdit] = useState(false);
  const [about, setAbout] = useState(user.user_bio);
  const [hardware, setHardware] = useState(user.preferred_hardware);

  const handleEdit = () => {
    if (edit) {
      return (
        <StyledText>
          <div className='edit-bio'>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              defaultValue={about}
            ></textarea>
            <div className='bottom-controls'>
              <select onChange={(e) => setHardware(e.target.value)}>
                <option hidden value>
                  Change hardware
                </option>
                <option value='pc'>PC</option>
                <option value='playstation'>PlayStation</option>
                <option value='xbox'>Xbox</option>
                <option value='wii'>Wii</option>
                <option value='switch'>Switch</option>
                <option value='mobile'>Mobile</option>
                <option value='vr'>VR</option>
              </select>
              <button
                onClick={() => {
                  handleUpdateBio();
                  handleUpdateHardware();
                  setEdit((c) => !c);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </StyledText>
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

  const handleUpdateHardware = async () => {
    try {
      const res = await fetch(`${API_URL}/profiles/${user.username}/hardware`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          hardware: hardware,
          user_id: user.user_id
        })
      });
      const data = await res.json();
      console.log(data);
      setHardware(data.profile.preferred_hardware);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateBio = async () => {
    try {
      const res = await fetch(`${API_URL}/profiles/${user.username}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          user_bio: about,
          user_id: user.user_id
        })
      });
      const data = await res.json();
      console.log(data);
      setAbout(data.profile.user_bio);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledWrapper>
      <div className='about-body'>
        {handleEdit()}
        <header>
          {userIsOwner === true ? (
            <button onClick={() => setEdit((c) => !c)}>Edit</button>
          ) : null}
        </header>

        <div className='preferred-hardware'>
          <span>Preferred Hardware:</span>
          {hardware ? (
            <span>{hardware.charAt(0).toUpperCase() + hardware.slice(1)}</span>
          ) : (
            <span>None yet</span>
          )}
        </div>
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
  padding: 3.2rem 3.2rem 0 3.2rem;
  .about-body {
    color: white;
    width: 100%;

    header {
      display: flex;
      justify-content: flex-end;
      max-width: 68rem;

      span {
        padding: 1rem 3rem 1.5rem 3.5rem;
        /* margin-left: 2rem; */

        border-bottom: solid 2px white;
      }

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

    .preferred-hardware {
      span {
        padding: 1rem 3rem 0.5rem 0.5rem;
        /* margin-left: 2rem; */
      }
    }
  }
`;

const StyledText = styled.div`
  .edit-bio {
    width: 100%;
    text-align: center;

    textarea {
      width: 95%;
      /* margin-top: 1rem; */
      height: 40rem;
      padding: 1rem;
      background-color: rgb(84, 84, 84, 0.7);
      color: white;
      line-height: 3rem;
    }
    textarea:focus {
      outline: none;
    }

    .bottom-controls {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
    }
  }

  @media all and (min-width: 970px) {
    .edit-bio {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 70%;
      margin: auto;
      margin-top: 4rem;

      button {
        width: 10rem;
        margin: auto;
        margin-top: 2rem;
      }
    }
  }
`;

export default UserAbout;
