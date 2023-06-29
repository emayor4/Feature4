import React from "react";

const CommunitiesList = ({ communities }) => {
  return (
    <div>
      <hr />
      This is the main list stateless child component.
      <div>
        <p> Lesson by ID: </p>
        {/* Check that the lesson object exists */}
        {communities.length > 0 && (
          <ul>
            {/* Using getter for lesson Object to display name */}
            {communities.map((comm) => (
              <li key={comm.id}>
                {comm.get("name")}
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default CommunitiesList;
