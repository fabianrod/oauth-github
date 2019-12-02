import axios from 'axios';

const getRepos = (token: any) => axios({
  url: `https://api.github.com/user/repos?access_token=${token}`,
  method: 'GET',
})
  .then(response => response.data);

export default getRepos;