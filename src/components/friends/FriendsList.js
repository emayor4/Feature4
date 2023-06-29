import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <div>
      <div>
        {friends.length > 0 && (
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                {friend.get("firstName")} 
                <br />
                {friend.get("state")}, {friend.get("city")} 
                <br />
                Main Community: {friend.get("community").get("name")} 
                <br />
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default FriendsList;
