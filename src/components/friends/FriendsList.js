import React from "react";

function FriendsList({ friends }) {
  return (
    <div>
      {friends.map((friend, index) => (
        <p key={index}>{friend.name}</p>
      ))}
    </div>
  );
}

export default FriendsList;
