import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5246/api/user`)
      .then(response => response.json())
      .then(data => {
        const user = data.find(u => u.username === username && u.password === password);
        if (user) {
          setMessage(`Logged in as ${user.username}!`);
        } else {
          setMessage('Invalid login.');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Sign In</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SignIn;
