import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../config';
import EachFriend from './EachFriend/EachFriend';

const UserFriends = ({ profile, userIsOwner }) => {
  const [search, setSearch] = useState(null);
  const [friends, setFriends] = useState(null);
  const [results, setResults] = useState(null);
  const [requests, setRequests] = useState(null);
  const [selected, setSelected] = useState('');
  const [sentRequests, setSentRequests] = useState(null);

  useEffect(() => {
    const getSentRequests = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const res = await fetch(`${API_URL}/friends/sent`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        setSentRequests(data.allSentRequests);
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
            authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
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
            authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        getSentRequests();
        setRequests(data.allPendingFriends);
      } catch (err) {
        console.log(err);
      }
    };
    getAllFriends();
    getAllRequests();
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    try {
      const res = await fetch(`${API_URL}/users/search?searchTerm=${search}`);
      const data = await res.json();
      setResults(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisplayFriends = () => {
    if (friends) {
      return (
        <StyledFriends>
          <div>
            <span>Friends list</span>
            {friends.map((friend, y) => {
              return (
                <div className='each-friend' key={y}>
                  <span>{friend.username}</span>
                  {userIsOwner === true ? (
                    <button onClick={() => deleteFriend(friend.friend_id)}>
                      X
                    </button>
                  ) : null}
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

  const deleteFriend = async (friend_id) => {
    try {
      console.log('user_b', profile.id);
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/friends/deleteFriend`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          user_a: profile.user_id,
          friend_id: friend_id
        })
      });
      await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRequest = async (id) => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/friends/declineFriend`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: id
        })
      });
      await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRequestsList = () => {
    if (requests) {
      return (
        <StyledRequests>
          <div>
            <h2>Receiving requests from:</h2>
            {requests.map((request, y) => {
              return (
                <div className='each-request' key={y}>
                  <span>{request.username}</span>
                  <button
                    onClick={() =>
                      acceptFriendRequest(request.id, request.sender)
                    }
                  >
                    Accept
                  </button>
                  <button onClick={() => deleteRequest(request.id)}>
                    Decline
                  </button>
                </div>
              );
            })}
            {displaySentRequests()}
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

  const displaySentRequests = () => {
    if (sentRequests) {
      return (
        <div className='sent-requests'>
          <h2>Sent request to: </h2>
          {sentRequests.map((request, y) => {
            return (
              <div className='each-sent' key={y}>
                <span>{request.username}</span>
                <button onClick={() => deleteRequest(request.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  const acceptFriendRequest = async (id, sender) => {
    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/friends/acceptFriend`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          id: id,
          sender: sender,
          user_id: profile.user_id
        })
      });
      const data = await res.json();
      setRequests(data.allPendingFriends);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisplay = () => {
    switch (selected) {
      case 'friends':
        return <div className='friends-list'>{handleDisplayFriends()}</div>;
      case 'requests':
        return <div className='requests-list'>{handleRequestsList()}</div>;
      default:
        return <div className='friends-list'>{handleDisplayFriends()}</div>;
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
          <span>Searching users</span>
          {results.map((each, y) =>
            each.id !== profile.id ? (
              <EachFriend
                each={each}
                HandleAddFriend={HandleAddFriend}
                friends={friends}
                key={y}
              />
            ) : null
          )}
        </div>
      );
    }
  };

  const HandleAddFriend = async (friendId) => {
    const token = localStorage.getItem('jwt');
    const user_b = friendId.toString();
    const friend = {
      user_b
    };
    try {
      const res = await fetch(`${API_URL}/friends/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(friend)
      });

      await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledWrapper>
      {userIsOwner === true ? (
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
            <option hidden value></option>
            <option value='friends'>All Friends</option>
            <option value='requests'>Friend requests</option>
          </select>
        </header>
      ) : null}
      <div className='friend-body'>{handleFriendsBodyDisplay()}</div>
    </StyledWrapper>
  );
};

export default UserFriends;

const StyledWrapper = styled.div`
  padding: 2.4rem 2.4rem 0 2.4rem;
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
      height: 4.8rem;
      padding-left: 0.8rem;
      border-radius: 0.4rem;
      border: none;
      width: 16rem;
    }

    @media all and (min-width: 970px) {
      input {
        width: 28rem;
      }
    }
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

  @media all and (min-width: 970px) {
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

  .sent-requests {
    margin-top: 3rem;

    .each-sent {
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
        margin-top: 2rem;
      }
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
