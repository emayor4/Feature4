import React from 'react';

function CommunitiesList({ communities }) {
  return (
    <div>
      {communities.map((community, index) => (
        <p key={index}>{community.name}</p>
      ))}
    </div>
  );
}

export default CommunitiesList;
