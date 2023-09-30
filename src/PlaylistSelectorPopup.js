import React from 'react';

function PlaylistSelectorPopup({ playlists, selectedPlaylists, onSelectPlaylist, onAddToPlaylists, currentPage }) {
  const handleCreatePlaylist = () => {
    const name = prompt('Enter playlist name:');
    if (name) {
      // Handle creating a new playlist
    }
  };

  return (
    <div className="playlist-selector-popup">
      {playlists.map((playlist) => (
        <label key={playlist.name}>
          <input
            type="checkbox"
            value={playlist.name}
            checked={selectedPlaylists.includes(playlist.name)}
            onChange={(e) =>
              onSelectPlaylist(e.target.value, e.target.checked)
            }
          />
          {playlist.name}
        </label>
      ))}
      {currentPage === '/playlists' && (
        <button className="create-playlist-button" onClick={handleCreatePlaylist}>
          Create Playlist
        </button>
      )}
      <button className='main-button' onClick={onAddToPlaylists}>Add to Playlists</button>
    </div>
  );
}

export default PlaylistSelectorPopup;