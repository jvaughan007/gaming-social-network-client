import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';
import EachFriend from './EachFriend/EachFriend';

const UserFriends = (profile) => {
    const [search, setSearch] = useState(null);
    const [friends, setFriends] = useState([]);
    const [results, setResults] = useState(null);
    const [requests, setRequests] = useState([]);
    const [selected, setSelected] = useState('');
    const [friendMessage, setFriendMessage] = useState(null);

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        try {
            const res = await fetch(
                `${API_URL}/users/search?searchTerm=${search}`
            );
            const data = await res.json();
            setResults(data.users);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllFriends = async () => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/friends/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            setFriends(data.returnAllCurrentFriends);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllRequests = async () => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/friends/requests`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });
            const data = await res.json();
            setRequests(data.returnAllPendingFriends);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllFriends();
        getAllRequests();
    }, []);

    const handleDisplayFriends = () => {
        if (friends.length > 0) {
            return (
                <div>
                    {friends.map((friend) => {
                        console.log(friend);
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    <span>You have no friends</span>
                </div>
            );
        }
    };

    const handleRequestsList = () => {
        if (requests.length > 0) {
            return (
                <div>
                    {requests.map((request) => {
                        console.log(request);
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    <span>You have no requests</span>
                </div>
            );
        }
    };

    const handleDisplay = () => {
        switch (selected) {
            case 'friends':
                return (
                    <div className='friends-list'>{handleDisplayFriends()}</div>
                );
            case 'requests':
                return (
                    <div className='requests-list'>{handleRequestsList()}</div>
                );
            default:
                return (
                    <div className='friends-list'>{handleDisplayFriends()}</div>
                );
        }
    };

    const handleFriendsBodyDisplay = () => {
        if (!search) {
            return <div>{handleDisplay()}</div>;
        }
        if (results) {
            if (results.length < 1) {
                return (
                    <div>
                        <h1>No results</h1>
                    </div>
                );
            }
            return (
                <div>
                    {results.map((each, y) => {
                        if (each.id !== profile.profile.id) {
                            return (
                                <EachFriend
                                    each={each}
                                    HandleAddFriend={HandleAddFriend}
                                    setFriendMessage={setFriendMessage}
                                    key={y}
                                />
                            );
                        }
                    })}
                </div>
            );
        }
    };

    const HandleAddFriend = async (friendId) => {
        const token = localStorage.getItem('jwt');
        const user_b = friendId.toString();
        const message = friendMessage;
        const friend = {
            user_b,
            message,
        };
        try {
            const res = await fetch(`${API_URL}/friends/request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(friend),
            });

            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <StyledWrapper>
            <header>
                <input
                    placeholder='search a username...'
                    onChange={(e) => handleSearch(e)}
                ></input>
                <select
                    onChange={(e) => {
                        setSelected(e.target.value);
                        setSearch(null);
                    }}
                >
                    <option value='friends'>All Friends</option>
                    <option value='requests'>Friend requests</option>
                </select>
            </header>
            <div className='friend-body'>{handleFriendsBodyDisplay()}</div>
        </StyledWrapper>
    );
};

export default UserFriends;

const StyledWrapper = styled.div`
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .friend-body {
        color: white;
        text-align: center;
        padding-top: 2rem;
    }
    .each-friend-result {
        height: 8rem;
        border: solid 1px white;
        color: black;
        background-color: white;
        border-radius: 5rem;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        input {
            width: 22rem;
            margin: auto;
        }

        button {
            width: 3rem;
            margin: auto;
        }
    }
`;
