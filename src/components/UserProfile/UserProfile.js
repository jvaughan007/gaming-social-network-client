import React, { useState, useEffect, useRef } from 'react';
import VertNavBar from '../Sidebar/SideBar';
import { Route, Switch, Link, useParams, useHistory } from 'react-router-dom';
import UserAbout from './UserAbout/UserAbout';
import UserGames from './UserGames/UserGames';
import UserImages from './UserImages/UserImages';
import UserFriends from './UserFriends/UserFriends';
import { API_URL } from '../../config';

import styled from 'styled-components';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [staticUsername, setStaticUsername] = useState('');
  const [selected, setSelected] = useState(null);
  let history = useHistory();
  let { username } = useParams();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await fetch(`${API_URL}/users/${username}`);
        const data = await res.json();
        setStaticUsername(data.profile.username);
        if (!data.success) {
          return history.push('/404');
        }
        return setProfile(data.profile);
      } catch (err) {
        return history.push('/404');
      }
    };

    getUserProfile();
  }, []);

  const renderUserBody = () => {
    switch (selected) {
      case 'about':
        return <UserAbout profile={profile} />;
      case 'games':
        return <UserGames profile={profile} />;
      case 'images':
        return <UserImages profile={profile} />;
      case 'friends':
        return <UserFriends profile={profile} />;
      default:
        return <UserAbout profile={profile} />;
    }
  };

  return profile ? (
    <StyledMain>
      <div className='user-container'>
        <nav>
          <VertNavBar />
        </nav>
        <div className='user-profile'>
          <div className='header'>
            <img
              src={profile.banner_url}
              alt='banner'
              className='banner-img'
            ></img>
            <div className='user-tags-img'>
              <img
                src={profile.profile_url}
                alt='users default'
                className='user-image'
              ></img>
              <div className='user-tags'>
                <span>{staticUsername}</span>
                <span className='user-gamertag'>
                  {profile.external_usernames}
                </span>
              </div>
            </div>
            <div className='edit-profile-btn'>
              <button>Edit Profile</button>
            </div>
            <div className='control-center'>
              <div>
                <button id='about' onClick={() => setSelected('about')}>
                  About
                </button>
              </div>
              <div>
                <button id='games' onClick={() => setSelected('games')}>
                  Games
                </button>
              </div>
              <div>
                <button id='images' onClick={() => setSelected('images')}>
                  Images
                </button>
              </div>
              <div>
                <button id='friends' onClick={() => setSelected('friends')}>
                  Friends
                </button>
              </div>
            </div>
          </div>
          <div className='user-body'>{renderUserBody()}</div>
        </div>
      </div>
    </StyledMain>
  ) : null;
};
const StyledMain = styled.main`
  nav {
    position: fixed;
    left: 0;
    z-index: 1000;
  }

  .user-profile {
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .header {
      position: fixed;
      left: 0;
      top: 0;

      .banner-img {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        z-index: -1000;
      }

      .user-tags-img {
        position: absolute;
        bottom: 6rem;
        display: flex;
        img {
          width: 5rem;
          height: 5rem;
          margin-left: 2rem;
          border-radius: 10rem;
          margin-right: 2rem;
        }
        .user-tags {
          color: white;
          display: flex;
          flex-direction: column;
          font-size: 2.3rem;
          padding-top: 0.3rem;

          .user-gamertag {
            padding-top: 0.3rem;
            font-size: 1.7rem;
          }
        }
      }
      .edit-profile-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 1.2rem;

        button {
          padding: 0.75rem 1rem 0.75rem 1rem;
          border: none;
        }
      }
      .control-center {
        position: absolute;
        bottom: 1rem;
        display: flex;
        height: 5rem;
        padding-left: 1rem;

        button {
          color: white;
          border: none;
          background-color: transparent;
          padding: 2rem;
          padding-bottom: 1.5rem;
        }
        button:focus {
          border-bottom: solid 3.5px white;
          outline: none;
        }
      }
    }
    .user-body {
      position: absolute;
      top: 18rem;
      background-color: rgb(19, 27, 33, 0.8);
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  @media all and (min-width: 750px) {
    .user-profile {
      width: 70%;
      height: 100%;
      position: fixed;
      left: 20rem;

      .header {
        position: fixed;
        top: 0;
        left: 20rem;
        width: 70%;
        height: 25rem;

        .user-tags-img {
          position: absolute;
          bottom: 7rem;
          display: flex;
          img {
            width: 8rem;
            height: 8rem;
            margin-left: 5rem;
            border-radius: 10rem;
            margin-right: 2rem;
          }
          .user-tags {
            font-size: 3.5rem;

            .user-gamertag {
              font-size: 2.4rem;
            }
          }
        }
        .edit-profile-btn {
          font-size: 1.7rem;
          bottom: 0;
          top: 19rem;
        }
        .control-center {
          padding-left: 5rem;

          button {
            margin-right: 4rem;
          }
        }
      }
      .user-body {
        top: 26rem;
      }
    }
  }
`;

export default UserProfile;
