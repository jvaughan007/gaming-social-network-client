import React, { useState } from 'react';
import styled from 'styled-components';

//mock store for now
const newFriend = [
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
    { user_id: 1, username: 'new guy', external_username: '@TheNewGuy' },
];

const UserFriends = () => {
    const [friendInput, setFriendInput] = useState(''); //users search parameter
    const [listOfSearched, setListOfSearched] = useState([]); //list of users found from users search parameter

    const eachPerson = (person, y) => {
        return (
            <div className='each-result' key={y}>
                <span className='persons-icon'></span>
                <div className='persons-info'>
                    <h2>{person.username}</h2>
                    <span>{person.external_username}</span>
                </div>
                <button>Add+</button>
            </div>
        );
    };

    const searchForFriend = (e) => {
        e.preventDefault();

        //search list of users for the person current user is searching for
        //set the list of users sent back to listOfSearched
    };

    return (
        <StyledWrapper>
            <div className='friends-body'>
                <div>
                    <form onSubmit={(e) => searchForFriend(e)}>
                        <label htmlFor='search'>Search for new friends: </label>
                        <input
                            className='friend-search-input'
                            name='search'
                            placeholder='Type their username...'
                            type='text'
                            onChange={(e) =>
                                setFriendInput(e.currentTarget.value)
                            }
                        ></input>
                        <button type='submit'>Search</button>
                    </form>
                </div>
                {/*instead of newFriend use listOfSearched to map through the array sent back from database*/}
                <div className='list-of-results'>
                    {newFriend.map((person, y) => eachPerson(person, y))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.main`
    .friends-body {
        width: 100%;
        text-align: center;

        form {
            padding: 2rem;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;

            label {
                color: white;
                font-size: 1.9rem;
            }

            .friend-search-input {
                width: 23rem;
                margin: auto;
                margin-top: 1rem;
            }

            button {
                width: 13rem;
                margin: auto;
                margin-top: 1rem;
            }
        }

        h1 {
            margin-top: 1rem;
            text-align: left;
            color: white;
        }
        .list-of-results {
            .each-result {
                display: flex;
                width: 35rem;
                margin: auto;
                margin-top: 3rem;
                padding-bottom: 1rem;
                text-align: center;
                background-color: white;
                border-radius: 5rem;

                .persons-icon {
                    width: 4rem;
                    height: 4rem;
                    border: solid 2px black;
                    margin: auto;
                    border-radius: 5rem;
                    margin-left: 1rem;
                    margin-right: 2rem;
                    margin-top: 1.2rem;
                }

                .persons-info {
                    h2 {
                        padding-top: 0.2rem;
                        margin-bottom: 1rem;
                    }
                }

                button {
                    width: 8rem;
                    margin-left: 9.8rem;
                    margin-top: 1rem;
                    border-radius: 5rem;
                }
            }
        }
    }

    @media all and (min-width: 750px) {
        .friends-body {

            form {
                display: flex;
                flex-direction: row;
                text-align: center;
                width: 65rem;
                margin: auto;

                label {
                    margin-top: 1rem;
                    margin-right: 2rem;
                }

                .friend-search-input {
                    margin-right: 0;
                    margin-left: 0;
                }

                button {
                    margin-left: 0;
                    width: 10rem;
                }
            }


        .list-of-results {
            .each-result {
                width: 45rem;

                button {
                    width: 9rem;
                    margin-left: 19rem;
                }
            }
        }
        }

`;

export default UserFriends;
