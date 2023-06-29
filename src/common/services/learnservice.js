import Parse from "parse";

// CREATE operation - new Community with Name
export const createCommunity = (name) => {
  const Community = Parse.Object.extend("Community");
  const community = new Community();
  community.set("name", name);
  return community.save();
};

// READ operation - get Community by ID
export const getCommunityById = (id) => {
  const Community = Parse.Object.extend("Community");
  const query = new Parse.Query(Community);
  return query.get(id);
};

// READ operation - get all Communities
export const getAllCommunities = () => {
  const Community = Parse.Object.extend("Community");
  const query = new Parse.Query(Community);
  return query.find();
};

// CREATE operation - new Friend with Name
export const createFriend = (name) => {
  const Friend = Parse.Object.extend("Friend");
  const friend = new Friend();
  friend.set("name", name);
  return friend.save();
};

// READ operation - get Friend by ID
export const getFriendById = (id) => {
  const Friend = Parse.Object.extend("Friend");
  const query = new Parse.Query(Friend);
  return query.get(id);
};

// READ operation - get all Friends
export const getAllFriends = () => {
  const Friend = Parse.Object.extend("Friend");
  const query = new Parse.Query(Friend);
  return query.find();
};

// export const getFriendById = (id) => {

// }
// export const getFriendbyCommunity = (community) => {
//   const Friend = Parse.Object.extend("Friend");
//   const query = new Parse.Query(Friend);
//   query.equalTo("community", friend);
//   return query.find().then(results => results);
// }
