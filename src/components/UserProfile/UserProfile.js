import React, { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import VertNavBar from '../Sidebar/Sidebar';
import { useParams, useHistory } from 'react-router-dom';
import UserAbout from './UserAbout/UserAbout';
import UserGames from './UserGames/UserGames';
import UserImages from './UserImages/UserImages';
import UserFriends from './UserFriends/UserFriends';
import PopupModel from './Popup/Popup';
import { API_URL } from '../../config';
import styled from 'styled-components';

const UserProfile = () => {
<<<<<<< HEAD
    const [profile, setProfile] = useState(null);
    const [staticUsername, setStaticUsername] = useState('');
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState(null);
    const [userIsOwner, setUserIsOwner] = useState(false);
=======
  const [profile, setProfile] = useState(null);
  const [staticUsername, setStaticUsername] = useState('');
  const [selected, setSelected] = useState(null);
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91

  let history = useHistory();
  let { username } = useParams();

<<<<<<< HEAD
    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const res = await fetch(`${API_URL}/users/${username}`);
                const data = await res.json();
                setStaticUsername(data.profile.username);
                if (!data.success) {
                    return history.push('/404');
                }
                console.log(data.profile);
                return setProfile(data.profile);
            } catch (err) {
                return history.push('/404');
            }
        };

        const checkCorrectUser = async () => {
            const token = localStorage.getItem('jwt');
            try {
                const res = await fetch(`${API_URL}/auth/verifyJWT`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
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

    const renderUserBody = () => {
        switch (selected) {
            case 'about':
                return (
                    <UserAbout profile={profile} userIsOwner={userIsOwner} />
                );
            case 'games':
                return <UserGames profile={profile} />;
            case 'images':
                return (
                    <UserImages profile={profile} userIsOwner={userIsOwner} />
                );
            case 'friends':
                return (
                    <UserFriends profile={profile} userIsOwner={userIsOwner} />
                );
            default:
                return (
                    <UserAbout profile={profile} userIsOwner={userIsOwner} />
                );
=======
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await fetch(`${API_URL}/users/${username}`);
        const data = await res.json();
        setStaticUsername(data.profile.username);
        console.log(data);
        if (!data.success) {
          return history.push('/404');
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91
        }
        console.log(data.profile);
        return setProfile(data.profile);
      } catch (err) {
        return history.push('/404');
      }
    };

<<<<<<< HEAD
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
                            </div>
                        </div>
                        {userIsOwner ? (
                            <div className='edit-profile-btn'>
                                <PopupModel profile={profile} />
                            </div>
                        ) : null}
                        <div className='control-center'>
                            <div>
                                <button
                                    id='about'
                                    onClick={() => setSelected('about')}
                                >
                                    About
                                </button>
                            </div>
                            <div>
                                <button
                                    id='games'
                                    onClick={() => setSelected('games')}
                                >
                                    Games
                                </button>
                            </div>
                            <div>
                                <button
                                    id='images'
                                    onClick={() => setSelected('images')}
                                >
                                    Images
                                </button>
                            </div>
                            <div>
                                <button
                                    id='friends'
                                    onClick={() => setSelected('friends')}
                                >
                                    Friends
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='user-body'>{renderUserBody()}</div>
                </div>
=======
    getUserProfile();
  }, [history, username]);

  const updateAvatarURL = (url) => {
    return setProfile((prevState) => ({ ...prevState, profile_url: url }));
  };

  const updateBannerURL = (url) => {
    return setProfile((prevState) => ({ ...prevState, banner_url: url }));
  };

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
              <PopupModel
                profile={profile}
                updateAvatarURL={updateAvatarURL}
                updateBannerURL={updateBannerURL}
              />
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
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91
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
      height: 20rem;

      .banner-img {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        z-index: -1000;
        object-fit: cover;
      }

<<<<<<< HEAD
            .user-tags-img {
                position: absolute;
                bottom: 6rem;
                display: flex;
                img {
                    width: 7rem;
                    height: 7rem;
                    margin-left: 2rem;
                    border-radius: 10rem;
                    margin-right: 2rem;
                    object-fit: cover;
                }
                .user-tags {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    font-size: 3.4rem;
                    padding-top: 0.3rem;
                }
            }
            .edit-profile-btn {
                position: absolute;
                top: 2rem;
                right: 2rem;
                font-size: 1.5rem;
=======
      .user-tags-img {
        position: absolute;
        bottom: 6rem;
        display: flex;
        img {
          width: 7rem;
          height: 7rem;
          margin-left: 2rem;
          border-radius: 10rem;
          margin-right: 2rem;
          object-fit: cover;
        }
        .user-tags {
          color: white;
          display: flex;
          flex-direction: column;
          font-size: 3.4rem;
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
        font-size: 1.5rem;
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91

        button {
          padding: 0.75rem 1rem 0.75rem 1rem;
          border: none;
        }
        button:focus {
          outline: none;
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
          padding: 1rem;
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
      top: 20rem;
      background-color: rgb(19, 27, 33, 0.8);
      position: relative;
      width: 100%;
      height: 100%;
    }
  }

  @media all and (min-width: 500px) {
    .user-profile {
      .header {
        .control-center {
          padding-left: 2rem;

          button {
            padding: 2rem;
          }
        }
      }
    }
  }

<<<<<<< HEAD
    @media all and (min-width: 968px) {
        .user-profile {
            width: 95%;
            height: 100%;
            position: fixed;
            left: 20rem;

            .header {
                position: fixed;
                top: 0;
                left: 20rem;
                width: 95%;
                height: 28rem;
=======
  @media all and (min-width: 968px) {
    .user-profile {
      width: 80%;
      height: 100%;
      position: fixed;
      left: 20rem;
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91

      .header {
        position: fixed;
        top: 0;
        left: 20rem;
        width: 80%;
        height: 28rem;

        .banner-img {
          object-fit: cover;
        }

<<<<<<< HEAD
                        .user-gamertag {
                            font-size: 2.4rem;
                        }
                    }
                }
                .edit-profile-btn {
                    font-size: 1.7rem;
                    bottom: 0;
                    right: 15rem;
                    top: 19rem;
                }
                .control-center {
                    padding-left: 5rem;
=======
        .user-tags-img {
          position: absolute;
          bottom: 7rem;
          display: flex;
          img {
            width: 11rem;
            height: 11rem;
            margin-left: 3rem;
            border-radius: 10rem;
            margin-right: 2rem;
          }
          .user-tags {
            padding-top: 2rem;
            font-size: 3.5rem;
>>>>>>> 3a3850088cc8eefa4cc1cd37448b10d706162a91

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
        top: 28rem;
      }
    }
  }
`;

export default UserProfile;
