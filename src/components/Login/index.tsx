import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.scss';
interface ILoginViewProps {
  isLogged: boolean,
}

interface IUser {
  email: string,
  password: string,
}

interface IUserViewProps {
  user: {
    name: string,
    email: string,
    password: string,
  },
  getUserData: () => void,
}
function Login({ user, getUserData }: IUserViewProps) {
  const [userInput, setUserInput] = useState<IUser>({ email: '', password: '' });
  const history = useHistory();

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  },[]);

  const handlerInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.currentTarget.name] : e.currentTarget.value
    })
  }

  const handlerAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(user.email === userInput.email && user.password === userInput.password) {
      history.push('/github');
    } else {
      Swal.fire('Oops...', 'User does not exist', 'error');
    }
  };
  return (
    <div className="login-page">
      <Container className="login-container">
        <h1>Login Form</h1>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={userInput.email} onChange={handlerInput} placeholder="Enter email" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={userInput.password} onChange={handlerInput} placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Text className="text-muted">
              If you are new, you can <Link to="/signup">create an account here</Link>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handlerAuth}>
            Log In
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;