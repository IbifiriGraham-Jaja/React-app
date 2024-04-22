
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RepositoryDetails() {
  const { id } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repositories/${id}`)
      .then(response => {
        setRepo(response.data);
      })
      .catch(error => console.error('Error fetching repository details:', error));
  }, [id]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      
    </div>
  );
}

export default RepositoryDetails;
