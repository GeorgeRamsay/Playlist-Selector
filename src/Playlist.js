import React from 'react';
import { useParams } from 'react-router-dom';

function Playlist({ playlists, setPlaylists, selectedPlaylist, setSelectedPlaylist }) {
  const handleRemoveSong = (song) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) => {
        if (playlist.name === selectedPlaylist) {
          return {
            ...playlist,
            songs: playlist.songs.filter((s) => s.trackId !== song.trackId),
          };
        }
        return playlist;
      })
    );
  };

  let songs = [];
  if (selectedPlaylist) {
    const playlist = playlists.find((playlist) => playlist.name === selectedPlaylist);
    if (playlist) {
      songs = playlist.songs;
    }
  }

  return (
    <div>
      {selectedPlaylist && (
        <button className="back-button" onClick={() => setSelectedPlaylist(null)}>
          Back
        </button>
      )}
      <h2 className='headings'>{selectedPlaylist}</h2>

      <ul className="playlist-grid">
        {songs.map((song) => (
          <li key={song.trackId} className="playlist-item">
            <img src={song.artworkUrl100} alt="Album cover" />
            <div className="playlist-item-info">
              <div >{song.trackName}</div>
              <div >{song.collectionName}</div>
              <div >by {song.artistName}</div>
            </div>
            <div className="playlist-item-buttons">
              <button
                className="main-button"
                onClick={() => handleRemoveSong(song)}
              >
                Remove Song
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;