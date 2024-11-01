import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';
import '../styles/login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      setError('');

      try {
        const userData = await loginUser(email, password);
        console.log('Login successful:', userData);

        const username = userData.username || 'Guest';
        console.log('Username from response:', username);

        localStorage.setItem('userName', username);

        navigate('/myprofile');
      } catch (error) {
        console.error('Error during login:', error);
        setError(error.message); 
      }
    }
  };

  return (
    <div className="login-outsideContainer">
      <div className="login-container">
        <h1 style={{ fontSize: '24px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ backgroundColor: '#F7FBFF' }}
          />
          <label>Password</label>
          {error && <p style={{ color: 'red', fontSize: '10px' }}>{error}</p>}
          <input
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: '#F7FBFF' }}
          />
          <p className="forgot-password" style={{ textAlign: 'right' }}>
            <Link to="/">Forgot Password?</Link>
          </p>
          <button className="btn-submit" type="submit">
            Sign in
          </button>
        </form>
        <div className="line-or">
          <span>Or</span>
        </div>
        <button className="btn-google" type="button" style={{ backgroundColor: '#F3F9FA' }}>
          <Link to="/signup" className="google-link" style={{ color: 'black', textDecoration: 'none' }}>
            <img src="../google.png" alt="" className="google-logo" />
            Sign in with Google
          </Link>
        </button>
        <p>Don't you have an account? <Link to="/signup">SignUp</Link></p>
      </div>
      <div className="login-gambar">
        <img src="./signupimage.png" alt="login image" />
      </div>
    </div>
  );
};
