import Parse from "parse";

export const getCommunities = () => {
  const Community = Parse.Object.extend('Community');
  const query = new Parse.Query(Community);
  return query.find().then((results) => {
    return results;
  });
};