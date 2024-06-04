import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignIn.css';

function SignIn() {
  const accessToken = localStorage.getItem('access_token') || undefined;
  const navigate = useNavigate();
  if (accessToken) {
    navigate('/');
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (existingUser) {
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      navigate('/');
    } else {
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: username,
          password: password,
        })
      })
        .then(res => res.json())
        .then(
          (result) => {
            if (result.error) {
              alert(result.error);
            } else {
              alert('Login successfully');
              localStorage.setItem('access_token', result.token);
              navigate('/');
            }
          }
        );
    }
  };

  return (
    <div className="account-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required
          />
        </div>
        <div className="user-box">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="action">
          <Link to="/register" className="account">
            Don't have an account?
          </Link>
          <button type="submit">Login to your account</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;