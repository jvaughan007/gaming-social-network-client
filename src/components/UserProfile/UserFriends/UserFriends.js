import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';
import EachFriend from './EachFriend/EachFriend';

const UserFriends = (profile) => {
    const [search, setSearch] = useState(null);
    const [friends, setFriends] = useState(null);
    const [results, setResults] = useState(null);
    const [requests, setRequests] = useState(null);
    const [selected, setSelected] = useState('');

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
            console.log(data);
            setFriends(data.allCurrentFriends);
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
            console.log(data);

            setRequests(data.allPendingFriends);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getAllFriends();
        getAllRequests();
    }, []);

    const handleDisplayFriends = () => {
        if (friends) {
            return (
                <StyledFriends>
                    <div>
                        {friends.map((friend, y) => {
                            return (
                                <div className='each-friend' key={y}>
                                    <span>{friend.username}</span>
                                    <button
                                        onClick={() =>
                                            deleteFriend(
                                                friend.user_a,
                                                friend.friends_id
                                            )
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </StyledFriends>
            );
        } else {
            return (
                <div>
                    <span>You have no friends yet</span>
                </div>
            );
        }
    };

    const deleteFriend = (user_a) => {
        console.log('user_a', user_a);
        console.log('user_b', profile.profile.id);
        const deleteFriend = {
            user_b: profile.profile.id,
            user_a: user_a,
        };
        const token = localStorage.getItem('jwt');
        fetch(`${API_URL}/friends/deleteFriend`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(deleteFriend),
        });
    };

    const handleRequestsList = () => {
        if (requests) {
            return (
                <StyledRequests>
                    <div>
                        {requests.map((request, y) => {
                            console.log(request);
                            return (
                                <div className='each-request' key={y}>
                                    <span>{request.username}</span>
                                    <button
                                        onClick={() =>
                                            acceptFriendRequest(
                                                request.friends_id,
                                                request.user_a
                                            )
                                        }
                                    >
                                        Accept
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </StyledRequests>
            );
        } else {
            return (
                <div>
                    <span>You have no requests</span>
                </div>
            );
        }
    };

    const acceptFriendRequest = async (friends_id, user_a) => {
        try {
            const token = localStorage.getItem('jwt');
            const res = await fetch(`${API_URL}/friends/acceptFriend`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    user_b: profile.profile.id,
                    user_a: user_a,
                    friends_id: friends_id,
                }),
            });
            const data = await res.json();
            console.log(data);
            setRequests(data.allPendingFriends);
        } catch (err) {
            console.log(err);
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
        const friend = {
            user_b,
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
        height: 7rem;
        width: 24rem;
        border: solid 1px white;
        color: black;
        background-color: white;
        border-radius: 5rem;
        margin: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: center;

        span {
            font-size: 2.5rem;
            margin-right: 5rem;
            margin-top: 2rem;
        }

        button {
            height: 2.5rem;
            margin-top: 2rem;
        }
    }
`;

const StyledRequests = styled.div`
    .each-request {
        height: 7rem;
        width: 24rem;
        border: solid 1px white;
        color: black;
        background-color: white;
        border-radius: 5rem;
        margin: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: center;

        span {
            font-size: 2.5rem;
            margin-right: 5rem;
            margin-top: 2rem;
        }

        button {
            height: 2.5rem;
            margin-top: 2rem;
        }
    }
`;

const StyledFriends = styled.div`
    .each-friend {
        height: 7rem;
        width: 24rem;
        border: solid 1px white;
        color: black;
        background-color: white;
        border-radius: 5rem;
        margin: auto;
        margin-top: 2rem;
        display: flex;
        justify-content: center;

        span {
            font-size: 2.5rem;
            margin-right: 5rem;
            margin-top: 2rem;
        }
        button {
            height: 2.5rem;
            margin-top: 2rem;
        }
    }
`;
