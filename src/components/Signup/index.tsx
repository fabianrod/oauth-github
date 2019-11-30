import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.scss';

interface IUser {
  name: string,
  email: string,
  password: string,
}

function Signup () {

  const [user, setUser] = useState<IUser>({
    name: '',
    email: '',
    password: '',
  });
  const handleForm = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.currentTarget.name] : e.currentTarget.value 
    });
  }
  const submitForm = () => {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
  return (
    <div className="signup-page">
      <Container className="signup-container">
        <h1>Signup Form</h1>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={user.name} onChange={handleForm} placeholder="Your Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={user.email} onChange={handleForm} placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={user.password} onChange={handleForm} placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Text className="text-muted">
              Back to <Link to="/">login page</Link>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitForm}>
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;