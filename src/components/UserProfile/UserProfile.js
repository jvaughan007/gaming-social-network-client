import React, { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import Sidebar from '../Sidebar/Sidebar';
import { useParams, useHistory } from 'react-router-dom';
import UserAbout from './UserAbout/UserAbout';
import UserGames from './UserGames/UserGames';
import UserFriends from './UserFriends/UserFriends';
import PopupModel from './Popup/Popup';
import { API_URL } from '../../config';
import styled from 'styled-components';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [staticUsername, setStaticUsername] = useState('');
  const [selected, setSelected] = useState(null);
  const [userIsOwner, setUserIsOwner] = useState(false);

  let history = useHistory();
  let { username } = useParams();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await fetch(`${API_URL}/users/${username}`);
        const data = await res.json();
        setStaticUsername(data.profile.username);
        if (!data.success) {
          return history.push('/error/404');
        }
        return setProfile(data.profile);
      } catch (err) {
        return history.push('/error/404');
      }
    };

    const checkCorrectUser = async () => {
      const token = localStorage.getItem('jwt');
      try {
        const res = await fetch(`${API_URL}/auth/verifyJWT`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        if (data.username === username) {
          setUserIsOwner(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUserProfile();
    checkCorrectUser();
  }, [history, username]);

  const updateBannerURL = (url) => {
    return setProfile((prevState) => ({ ...prevState, banner_url: url }));
  };

  const updateAvatarURL = (url) => {
    return setProfile((prevState) => ({ ...prevState, profile_url: url }));
  };

  const renderUserBody = () => {
    switch (selected) {
      case 'about':
        return <UserAbout profile={profile} userIsOwner={userIsOwner} />;
      case 'games':
        return <UserGames profile={profile} />;
      case 'friends':
        return <UserFriends profile={profile} userIsOwner={userIsOwner} />;
      default:
        return <UserAbout profile={profile} userIsOwner={userIsOwner} />;
    }
  };

  return profile ? (
    <>
      <Sidebar />
      <StyledDiv className='user-container'>
        <StyledHeader backgroundImg={profile.banner_url}>
          <div className='user-tags-img'>
            <img
              src={profile.profile_url}
              alt='users default'
              className='user-image'
            ></img>

            <p className='user-tags'>{staticUsername}</p>
          </div>
          {userIsOwner ? (
            <div className='edit-profile-btn'>
              <PopupModel
                profile={profile}
                updateBannerURL={updateBannerURL}
                updateAvatarURL={updateAvatarURL}
              />
            </div>
          ) : null}
          <div className='control-center'>
            <div>
              <button id='about' onClick={() => setSelected('about')}>
                About
              </button>
            </div>
            <div>
              <button id='games' onClick={() => setSelected('games')}>
                Favorited Games
              </button>
            </div>
            <div>
              <button id='friends' onClick={() => setSelected('friends')}>
                Friends
              </button>
            </div>
          </div>
        </StyledHeader>
        <div className='user-profile'>
          <div className='header'></div>
          <div className='user-body'>{renderUserBody()}</div>
        </div>
      </StyledDiv>
    </>
  ) : null;
};

const StyledHeader = styled.header`
  height: 28rem;
  width: 100%;
  background: ${({ backgroundImg }) => `url(${backgroundImg})`} no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 2.4rem;

  .user-tags-img {
    display: flex;
    align-items: center;
    color: #fff;

    img {
      width: 9.6rem;
      height: 9.6rem;
      border-radius: 10rem;
    }

    .user-tags {
      font-size: 3.2rem;
      background: #131b21;
      opacity: 0.9;
      border-radius: 0.4rem;
      padding: 0.8rem 1.6rem;
      margin-left: 1.6rem;
    }
  }
  .edit-profile-btn {
    position: absolute;
    font-size: 1.6rem;
    top: 1.6rem;
    right: 1.6rem;
  }

  .control-center {
    display: flex;
    position: absolute;
    bottom: 0;

    button {
      color: white;
      border: none;
      background-color: transparent;
      padding: 1rem;
      padding-bottom: 1.5rem;
      margin-right: 1.6rem;
      cursor: pointer;
      outline: none;
      font-weight: 600;
    }
    button:hover {
      color: #9453d3;
    }
  }
`;

const StyledDiv = styled.div`
  width: calc(100% - 20rem);
  float: right;

  @media all and (max-width: 970px) {
    width: 100%;
  }
`;

export default UserProfile;
