import React, { useEffect, useState } from "react";
import { getAllFriends } from "../../common/services/friendsService";
import FriendsList from "./FriendsList";
import { useNavigate } from "react-router-dom";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getAllFriends()
      .then((data) => setFriends(data))
      .catch((error) => {
        console.error("Error retrieving friends:", error);
      });
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
      <button onClick={buttonHandler}>Home</button>
      <div>
        <h1>Friends List:</h1>
        <FriendsList friends={friends} />
      </div>
    </html>
  );
}
