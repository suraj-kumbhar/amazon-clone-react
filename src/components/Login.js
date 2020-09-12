import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in
        history.push('/');
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in
        history.push('/');
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <form>
          <h1>Sign In</h1>
          <h5>E-mail</h5>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__loginButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By siging-in you agree to Amazon's Conditions of Use & Sales. Please
          see our Privacy Notice, our Cookies Notice and our Interes-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
