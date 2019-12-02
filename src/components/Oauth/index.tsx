import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import getRepos from '../../api/repositories.api';
function Oauth(props: any) {
  const [repositories, setRepositories] = useState([]);
  const param = queryString.parse(props.location.search);
  useEffect(() => {
    getReposByOauth()
  },[]);

  const getReposByOauth = async () => {
    const repos = await getRepos(param.token);
    setRepositories(repos)
  }
  return (
    <div className="oauth-page">
      <Container>
        <h1>Github repositories</h1>
        <small>This is a list of repositories obtained thorugh oauth</small>
        <p>
          <Link to='/github'>Back</Link>
        </p>
        {
          repositories && repositories.map((repository: any) => (
            <div key={repository.id} className="repository-info">
              <div className="repository-feature">
                <strong>Name: </strong>
                <span>{repository.name}</span>
              </div>
              <div className="repository-feature">
                <strong>URL: </strong>
                <span>{repository.url}</span>
              </div>
            </div>
          ))
        }
      </Container>
    </div>
  );
}

export default Oauth;