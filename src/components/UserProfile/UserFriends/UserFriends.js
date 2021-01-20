import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const UserFriends = () => {
    const [search, setSearch] = useState(null);
    const [friends, setFriends] = useState([]);
    const [results, setResults] = useState(null);
    const [requests, setRequests] = useState([]);
    const [selected, setSelected] = useState('');

    const handleSearch = async (e) => {
        setSearch(e.target.value);
        try {
            const res = await fetch(
                `http://localhost:5000/users/search?searchTerm=${search}`
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
            const res = await fetch(`http://localhost:5000/friends/`, {
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
            const res = await fetch(`http://localhost:5000/friends/requests`, {
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
            return (
                <div>
                    {results.map((each, y) => {
                        return (
                            <div key={y} className='each-friend-result'>
                                <h1>{each.username}</h1>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    return (
        <StyledButtons>
            <header>
                <input
                    placeholder='search a username...'
                    onChange={(e) => handleSearch(e)}
                ></input>
                <select onChange={(e) => setSelected(e.target.value)}>
                    <option value='friends'>All Friends</option>
                    <option value='requests'>Friend requests</option>
                </select>
            </header>
            <div className='friend-body'>{handleFriendsBodyDisplay()}</div>
        </StyledButtons>
    );
};

export default UserFriends;

const StyledButtons = styled.div`
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
`;
