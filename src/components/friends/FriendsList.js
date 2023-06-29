import React from "react";

function FriendsList({ friends }) {
  if (!friends) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
}

export default FriendsList;
