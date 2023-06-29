import React, { useEffect, useState } from "react";
import { getFriends } from "../../common/services/friendsService";
import FriendsList from "./FriendsList";
import { useNavigate } from "react-router-dom";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then((data) => setFriends(data));
  }, []);
  
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };

  return (
    <html>
      <div>
        <h1>Neighboride</h1>
      </div>
      <div>
        <h1>Welcome to the Home </h1>
      </div>
      <button onClick={buttonHandler}>Home</button>
      <div>
        <h1>Friends List:</h1>
        <FriendsList friends={friends} />
      </div>
    </html>
  );
}


