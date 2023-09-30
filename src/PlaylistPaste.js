import React, { useState } from 'react';

function PlaylistPaste() {
  const [playlistURL, setPlaylistURL] = useState('');
  const [playlistData, setPlaylistData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlaylistPaste = () => {
    setLoading(true);
    try {
      // Extract playlist ID from the pasted URL
      const playlistId = extractPlaylistId(playlistURL);

      // Retrieve playlist details using the playlist ID
      const playlist = retrievePlaylistDetails(playlistId); // Function to retrieve playlist details

      // Update playlist data state
      setPlaylistData(playlist);
      setPlaylistURL('');
    } catch (error) {
      console.error('Error retrieving playlist details:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractPlaylistId = (url) => {
    // Extract the playlist ID from the URL using regular expressions or string manipulation
    // Example: https://open.spotify.com/playlist/playlistId?additionalParams
    const regex = /playlist\/([\w-]+)/;
    const matches = url.match(regex);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    throw new Error('Invalid Spotify playlist URL');
  };

  const retrievePlaylistDetails = (playlistId) => {
    // Simulate retrieving playlist details using the playlist ID
    // You can perform additional operations, like fetching song details, etc.
    return {
      id: playlistId,
      name: 'Sample Playlist',
      songs: [
        { id: 1, title: 'Song 1', artist: 'Artist 1' },
        { id: 2, title: 'Song 2', artist: 'Artist 2' },
        { id: 3, title: 'Song 3', artist: 'Artist 3' },
      ],
    };
  };

  return (
    <div>
      <input
        type="text"
        value={playlistURL}
        onChange={(e) => setPlaylistURL(e.target.value)}
        placeholder="Paste Spotify playlist URL"
      />
      <button onClick={handlePlaylistPaste}>Retrieve Playlist</button>
      {loading && <p>Loading...</p>}
      {playlistData && (
        <div>
          <h2>{playlistData.name}</h2>
          <ul>
            {playlistData.songs.map((song) => (
              <li key={song.id}>
                {song.title} - {song.artist}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PlaylistPaste;
