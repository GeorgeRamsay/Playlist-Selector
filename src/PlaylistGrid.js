function PlaylistGrid({ playlists, onSelectPlaylist, onRemovePlaylist }) {
  return (
    <ul className="playlist-grid">
      {playlists.map((playlist) => (
        <li key={playlist.name} className="playlist-item">
          {playlist.songs.length > 0 ? (
            <img
              className="playlist-image"
              src={playlist.songs[0].artworkUrl100}
              alt="Album cover"
            />
          ) : (
            <div className="empty-playlist"></div>
          )}
          <button className = "main-button" onClick={() => onSelectPlaylist(playlist.name)}>
            {playlist.name}
          </button>
          <button className = "main-button" onClick={() => onRemovePlaylist(playlist.name)}>
            Remove Playlist
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PlaylistGrid;