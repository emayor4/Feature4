import { API_URL } from '../../environments';
import Parse from "parse";

export const getCommunities = async () => {
  try {
    const Community = Parse.Object.extend("Community");
    const query = new Parse.Query(Community);
    const communities = await query.find();
    return communities;
  } catch (error) {
    console.error("Error fetching communities:", error);
    throw error;
  }
};

// Other community-related functions

export default {
  getCommunities,
  // Other exported functions
};


// Other community-related functions


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