import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignUp.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; 

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/login');
  };

  const validateForm = () => {
    if (username.length < 6) {
      alert('Username must be at least 6 characters');
      return false;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return false;
    }

    if (!/[a-z]/.test(password)) {
      alert('Password must contain a lowercase letter');
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      alert('Password must contain a uppercase letter');
      return false;
    }

    if (!/[0-9]/.test(password)) {
      alert('Password must contain a number or special character');
      return false;
    }

    return true; 
  };

  return (
    <div className="account-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="user-box">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
          <Link to="/login" className="account">Already have an account?</Link>
          <button type="submit">Create new account</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
