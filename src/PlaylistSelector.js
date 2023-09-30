import React from 'react';

function PlaylistSelector({ onCreatePlaylist }) {
  const handleCreatePlaylist = () => {
    const name = prompt('Enter playlist name:');
    if (name) {
      onCreatePlaylist(name);
    }
  };

  return (
    <div>
      <button className="create-playlist-button" onClick={handleCreatePlaylist}>
        Create Playlist
      </button>
    </div>
  );
}

export default PlaylistSelector;