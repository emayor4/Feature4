import React, { useEffect, useState } from "react";
import { getFriends } from "./../../common/services/friendsService";
import FriendsList from "./FriendsList";
import { useNavigate } from "react-router-dom";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  // Fetch friends data when the component mounts
  useEffect(() => {
    // Call the getFriends() function from the friendsService to fetch friends
    getFriends().then((friends) => {
      // Update the state with the fetched friends
      setFriends(friends);
    });
  }, []);

  const history = useNavigate();

  // Button click handler to navigate back to the home page
  const buttonHandler = () => {
    history("/");
  };

  return (
    <html>
      <div>
        {/* Heading */}
        <h1>Neighboride</h1>
      </div>
      
      <button onClick={buttonHandler}>Home</button>
      <div>
        {/* Friends list */}
        <h1>Friends List:</h1>
        
        <FriendsList friends={friends} />
      </div>
    </html>
  );
};

export default Friends;
