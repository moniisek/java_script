import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Card, Form, Input, Button, Error} from '../components/AuthForm'
import {useAuth} from '../context/auth'
import axios from 'axios'


function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthTokens} = useAuth();

  function postLogin() {
    axios.post("http://localhost:5000/login", {
      userName,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {setUserName(e.target.value)}}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {setPassword(e.target.value)}}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account? Sign up!</Link>
      {isError && <Error> The username or password provided were incorrect </Error>}
    </Card>
  )
}

export default Login;
