import React, { useState, useRef } from 'react';

const EachFriend = ({ HandleAddFriend, each, setFriendMessage }) => {
    const friendAdded = useRef(null);
    return (
        <div className='each-friend-result'>
            <span>{each.username}</span>
            <form>
                <input
                    placeholder='send a message to add them'
                    onChange={(e) => {
                        setFriendMessage(e.target.value);
                    }}
                ></input>
                <button
                    ref={friendAdded}
                    onClick={(e) => {
                        e.preventDefault();
                        friendAdded.current.setAttribute(
                            'disabled',
                            'disabled'
                        );
                        HandleAddFriend(each.id);
                    }}
                >
                    +
                </button>
            </form>
        </div>
    );
};
export default EachFriend;
