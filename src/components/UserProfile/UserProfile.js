import React, { Component, useState, useEffect } from 'react';
import VertNavBar from '../VerticalNavBar/VertNavBar';
import styled from 'styled-components';

const username = 'donotle98'; //this is just for a mockup

const UserProfile = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        //Fetch the user profile using the username

        return fetch(`http://localhost:5000/users/${username}`)
            .then((res) => res.json())
            .then((user) => setProfile(user.profile));
    }, []);
    console.log(profile);

    return (
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
                                <span>{username}</span>
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
                                <button>About</button>
                            </div>
                            <div>
                                <button>Games</button>
                            </div>
                            <div>
                                <button>Images</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledMain>
    );
};
const StyledMain = styled.main`
    nav {
        position: fixed;
        left: 0;
    }
    .user-profile {
        position: fixed;
        left: 20rem;

        .header {
            width: 100%;
            height: 30rem;

            .banner-img {
                width: 100%;
                height: 100%;
                opacity: 0.6;
            }

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
                    color: white;
                    display: flex;
                    flex-direction: column;
                    font-size: 3.5rem;

                    .user-gamertag {
                        font-size: 2.4rem;
                    }
                }
            }
            .edit-profile-btn {
                position: absolute;
                bottom: 4rem;
                right: 6rem;

                button {
                    padding: 0.75rem 1rem 0.75rem 1rem;
                    border: none;
                }
            }
        }
        .control-center {
            position: absolute;
            bottom: 1rem;
            display: flex;
            height: 5rem;
            padding-left: 5rem;

            button {
                margin-right: 2rem;
                color: white;
                border: none;
                background-color: transparent;
                padding: 2rem;
            }
            button:focus {
                border-bottom: solid 1px white;
                outline: none;
            }
        }
    }
`;

export default UserProfile;
