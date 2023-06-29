import React from "react";

const CommunitiesList = ({ communities }) => {
  return (
    <div>
      <div>
        {communities.length > 0 && (
          <ul>
            {communities.map((comm) => (
              <li key={comm.id}>
                Name: {comm.get("name")} 
                <br />
                Location: {comm.get("state")}, {comm.get("city")}
                <br />
                Members: {comm.get("members")}
                <br />
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default CommunitiesList;
