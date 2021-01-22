import React, { useState, useRef } from 'react';

const EachFriend = ({ HandleAddFriend, each }) => {
    const friendAdded = useRef(null);
    return (
        <div className='each-friend-result'>
            <span>{each.username}</span>
            <button
                ref={friendAdded}
                onClick={(e) => {
                    e.preventDefault();
                    friendAdded.current.setAttribute('disabled', 'disabled');
                    HandleAddFriend(each.id);
                }}
            >
                +
            </button>
        </div>
    );
};
export default EachFriend;
