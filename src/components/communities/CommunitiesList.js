import React, { useEffect, useState } from "react";
import { getCommunities } from "../../common/services/communitiesService";

const CommunitiesList = () => {
  const [communities,setCommunities] = useState([]);
  useEffect(() => {
    getCommunities().then((communities) => {
      setCommunities(communities);
    });
  }, []);

  return (
    <div>
      {communities.length > 0 && (
          <ul>
            {communities.map((comm) => (
              <li key={comm.objectID}>
                {comm.community}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
  
}



export default CommunitiesList;
