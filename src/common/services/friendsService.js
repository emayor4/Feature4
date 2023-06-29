import { API_URL } from '../../environments';

// Assuming you have the implementation of the `fetchData` function within `friendsService.js`
const fetchData = async (url) => {
  // Implementation of fetchData function
};

export const getFriends = async () => {
  try {
    const url = `${API_URL}/friends`;
    return fetchData(url);
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
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