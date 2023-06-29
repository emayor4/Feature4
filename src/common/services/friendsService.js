import Parse from "parse";

// Function to retrieve friends from Parse server
export const getFriends = () => {
  const Friend = Parse.Object.extend('Friend');
  const query = new Parse.Query(Friend);
  return query.find().then((results) => {
    return results;
  });
};
