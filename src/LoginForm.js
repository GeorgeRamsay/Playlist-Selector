import React, { useState } from 'react';
import { getLogin } from './iTunesApi';

function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await getLogin(username, password);
      if (loginResponse.isLoggedIn) {
        // Handle successful login (e.g., store the token in local storage)
        // ...
        onClose(); // Close the login pop-up
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      setLoginError('Error occurred while logging in');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
}

export default LoginForm;
