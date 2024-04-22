import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Repo = () => {
  const { id } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/IbifiriGraham-Jaja/${id}`);
        const data = await response.json();
        setRepo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repository:', error);
      }
    };

    fetchRepo();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!repo) {
    return <div>Repository not found</div>;
  }

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Forks: {repo.forks_count}</p>
      <p>Open issues: {repo.open_issues_count}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default Repo;
