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
    
    fetch("http://localhost:3000/api/v1/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name: username,
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.error) {
            alert(result.error);
          } else {
            alert('Account created successfully');
            navigate('/home');
          }
        }
      );
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
