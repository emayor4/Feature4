import React, { useEffect, useState } from "react";
import { getCommunities } from "../../common/services/communitiesService";
import CommunitiesList from "./CommunitiesList";
import { useNavigate } from "react-router-dom";

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    // Fetch communities data and update state
    getCommunities().then((communities) => {
      setCommunities(communities);
    });
  }, []);

  const history = useNavigate();

  const buttonHandler = () => {
    // Navigate to home page
    history("/");
  };

  return (
    <html>
      <div>
        <h1>Neighboride</h1>
      </div>
      <button onClick={buttonHandler}>Home</button>
      <div>
        <h1>Communities List:</h1>
        <CommunitiesList communities={communities} />
      </div>
    </html>
  );
}

export default Communities;
