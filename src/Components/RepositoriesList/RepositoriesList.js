
useEffect(() => {
  axios.get('https://api.github.com/users/IbifiriGraham-Jaja/repos')
    .then(response => {
      setRepos(response.data);
      setFilteredRepos(response.data);
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
      setError('Failed to fetch repositories. Please try again later.');
    });
}, []);

useEffect(() => {
  const filtered = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredRepos(filtered);
}, [searchTerm, repos]);

const handleSearch = e => {
  setSearchTerm(e.target.value);
};

if (error) {
  return <div>Error: {error}</div>; 
}

return (
  <div>
    <input type="text" placeholder="Search repositories..." onChange={handleSearch} />
    <ul>
      {filteredRepos.map(repo => (
        <li key={repo.id}>
          <Link to={`/repository/${repo.id}`}>{repo.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

