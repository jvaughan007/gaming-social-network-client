import React, { useState, useRef, useEffect } from 'react';

const EachFriend = ({ HandleAddFriend, each, friends }) => {
  const friendAdded = useRef(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleAlreadyFriends = () => {
      return friends.map((x) =>
        x.friend_id === each.id ? setAdded(true) : null
      );
    };
    handleAlreadyFriends();
  }, [each.id, friends]);
  return (
    <div className='each-friend-result'>
      <span>{each.username}</span>
      {!added ? (
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
      ) : null}
    </div>
  );
};
export default EachFriend;
