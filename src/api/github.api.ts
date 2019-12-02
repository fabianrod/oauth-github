import axios from 'axios';

const getRepositories = (username: string) => axios({
  url: `https://api.github.com/users/${username}/repos`,
  method: 'GET',
})
.then(({ data }) => data);

export default getRepositories;