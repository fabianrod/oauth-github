import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.scss';

interface ILoginViewProps {
  isLogged: boolean,
}
function Login(props: ILoginViewProps) {
  return (
    <div className="login-page">
      <Container className="login-container">
        <h1>Login Form</h1>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Text className="text-muted">
              If you are new, you can <Link to="/signup">create an account here</Link>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;