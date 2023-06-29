import React, { useEffect, useState } from "react";
import { getCommunities } from "../../common/services/communitiesService";
import CommunitiesList from "./CommunitiesList";
import { useNavigate } from "react-router-dom";

export default function Communities() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities().then((data) => setCommunities(data));
  }, []);

  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };

  return (
    <html>
      <div>
        <h1>Neighboride</h1>
      </div>
      <div>
        <h1>Welcome to the Home </h1>
      </div>
      <button onClick={buttonHandler}>Home</button>
      <div>
        <h1>Communities List:</h1>
        <CommunitiesList communities={communities} />
      </div>
    </html>
  );
}
