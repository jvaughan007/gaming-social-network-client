import React, { useState, useEffect } from 'react';
import VertNavBar from '../SideBar/SideBar';
import { Route, Switch, Link, useParams, useHistory } from 'react-router-dom';
import UserAbout from './UserAbout/UserAbout';
import UserGames from './UserGames/UserGames';
import UserImages from './UserImages/UserImages';
import UserFriends from './UserFriends/UserFriends';
import { API_URL } from '../../config';

import styled from 'styled-components';

const UserProfile = () => {
    const [profile, setProfile] = useState(null);
    let history = useHistory();
    let { username } = useParams();

    useEffect(
        () => {
            const getUserProfile = async () => {
                try {
                    const res = await fetch(`${API_URL}/users/${username}`);
                    const data = await res.json();
                    console.log(data);
                    if (!data.success) {
                        return history.push('/404');
                    }

                    return setProfile(data.profile);
                } catch (err) {
                    return history.push('/404');
                }
            };

            getUserProfile();
        },
        {
            /*[username, history]*/
        }
    );

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
                            <Link to={`/${username}`}>
                                <img
                                    src={profile.profile_url}
                                    alt='users default'
                                    className='user-image'
                                ></img>
                            </Link>
                            <div className='user-tags'>
                                <span>{username}</span>
                                <span className='user-gamertag'>
                                    {profile.external_usernames}
                                </span>
                            </div>
                        </div>
                        <div className='edit-profile-btn'>
                            <Link to={`${username}/editProfile`}>
                                <button>Edit Profile</button>
                            </Link>
                        </div>
                        <div className='control-center'>
                            <div>
                                <Link to='/userAbout'>
                                    <button>About</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/userGames'>
                                    <button>Games</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/userImages'>
                                    <button>Images</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/userFriends'>
                                    <button>Friends</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='user-body'>
                        <Switch>
                            <Route
                                exact
                                path={`/${username}/editProfile`}
                            ></Route>
                            <Route exact path='/userAbout'>
                                <UserAbout profile={profile} />
                            </Route>
                            <Route exact path='/userGames'>
                                <UserGames profile={profile} />
                            </Route>
                            <Route exact path='/userImages'>
                                <UserImages profile={profile} />
                            </Route>
                            <Route exact path='/userFriends'>
                                <UserFriends />
                            </Route>
                        </Switch>
                    </div>
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
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: auto;
        left: 0rem;

        .header {
            position: fixed;
            top: 0;
            width: 100%;
            height: 20rem;

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
                }
                button:focus {
                    border-bottom: solid 3.5px white;
                    outline: none;
                }
            }
        }
        .user-body {
            position: relative;
            height: 100%;
            top: 20rem;
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
