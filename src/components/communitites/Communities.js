import React, { useEffect, useState } from 'react';
import { getCommunities } from '../../common/services/communitiesService';
import CommunitiesList from './CommunititesList';

function Communities() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities().then(data => setCommunities(data));
  }, []);

  return (
    <div>
      <h1>Communities List:</h1>
      <CommunitiesList communities={communities} />
    </div>
  );
}

export default Communities;
