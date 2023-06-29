import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <div>
      <hr />
      This is the main list stateless child component.
      <div>
        <p> Lesson by ID: </p>
        {/* Check that the lesson object exists */}
        {friends.length > 0 && (
          <ul>
            {/* Using getter for lesson Object to display name */}
            {friends.map((friend) => (
              <li key={friend.id}>
                {friend.get("firstName")}
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default FriendsList;
