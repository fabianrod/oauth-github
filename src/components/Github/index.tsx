import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './github.scss';

interface IGithubPropsView {
  repositories: any[],
  getRepositories: (username: string) => void,
}
function Github({ repositories, getRepositories }: IGithubPropsView) {
  const [repositoryName, setRepositoryName] = useState('');
  const handlerRepoName = (e: React.FormEvent<HTMLInputElement>) => setRepositoryName(e.currentTarget.value);
  const searchRepositories = () => getRepositories(repositoryName);
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('isLogged');
    history.push('/');
  }
  return (
    <div className="page-github">
      <Container className="github-container">
        <h1>Github repositories</h1>
        <small>You can use two methods to get a list of repositories, via Oauth (method 1) and a simple GET request, providing the username.</small>
        <span className="logout" onClick={logout}>Logout</span>
      </Container>
      <Container className="repositories-list">
        <h3>Method 1: Via Oauth</h3>
        <Button className="primary">Get my list of repositories.</Button>
      </Container>
      <Container className="repositories-list">
        <h3>Method 2: Find by name</h3>
        <small>Write an username to find the repositories list.</small>
        <div className="searchform">
          <Form.Control type="text" value={repositoryName} onChange={handlerRepoName} placeholder="Repository name" />
          <Button className="primary" onClick={searchRepositories}>Search</Button>
        </div>
        {
          // eslint-disable-next-line
          repositories && repositories.map((repository) => (
            <div className="repository-info" key={repository.id}>
              <div>
                <strong>Name: </strong>
                <span>{repository.name}</span>
              </div>
              <div>
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

export default Github;