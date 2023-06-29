import Parse from "parse";

// READ operation - get all Friends
export const getAllFriends = async () => {
  const Friend = Parse.Object.extend("Friend");
  const query = new Parse.Query(Friend);
  return query.find();
};




// Other friend-related functions


// Rest of the code


/*import { API_URL } from '../../environments';
import { fetchData } from './learnservice';

export const getFriends = async () => {
  const url = `${API_URL}/friends`; 
  return fetchData(url);
};

export const getCommunities = async () => {
  const url = `${API_URL}/communities`; 
  return fetchData(url);
};
*/