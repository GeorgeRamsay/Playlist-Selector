import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './playlistgenius-logo.png';

function TopBar() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="topbar">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li className="title">
          Playlist Genius
        </li>
        <li>
          <Link to="/">Song Search</Link>
        </li>
        <li>
          <Link to="/playlists">Playlist</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
        <li>
          {user ? (
            <>
              <span>{user}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/SignIn">Sign In</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
