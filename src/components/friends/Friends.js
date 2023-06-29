import React, { useEffect, useState } from 'react';
import { getFriends } from '../../common/services/friendsService';
import FriendsList from './FriendsList';

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then(data => setFriends(data));
  }, []);

  return (
    <div>
      <h1>Friends List:</h1>
      <FriendsList friends={friends} />
    </div>
  );
}

export default Friends;
