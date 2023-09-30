import React, { useState } from 'react';
import { searchiTunes } from './iTunesApi';

function PlaylistSelectorPopup({
  playlists,
  selectedPlaylists,
  onSelectPlaylist,
  onAddToPlaylists,
}) {
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
      <button onClick={onAddToPlaylists}>Add to Playlists</button>
    </div>
  );
}
function SearchBar({ selectedFilter, setPlaylists, playlists, selectedPlaylist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const handleSearch = async () => {
    const media = selectedFilter === 'album' ? 'album' : 'music';
    const attribute =
      selectedFilter === 'song'
        ? 'songTerm'
        : selectedFilter === 'artist'
        ? 'artistTerm'
        : 'albumTerm';
    const results = await searchiTunes(searchTerm, media, attribute);
    setSearchResults(results);
  };
  const handleAddToPlaylist = (result) => {
    setPlaylists((prevPlaylists) => {
      const newPlaylists = [...prevPlaylists];
      selectedPlaylists.forEach((playlistName) => {
        const playlistIndex = newPlaylists.findIndex(
          (playlist) => playlist.name === playlistName
        );
        if (playlistIndex !== -1) {
          const songIndex = newPlaylists[playlistIndex].songs.findIndex(
            (song) => song.trackId === result.trackId
          );
          if (songIndex === -1) {
            newPlaylists[playlistIndex].songs.push(result);
          }
        }
      });
      return newPlaylists;
    });
    setSelectedPlaylists([]);
    setSelectedSong(null);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults && (
        <ul className="search-results-grid">
          {searchResults.results.map((result) => {
            return (
              <li key={result.trackId || result.collectionId} className="search-result">
                {selectedFilter === 'song' && (
                  <img src={result.artworkUrl100} alt="Album cover" />
                )}
                <div className="search-result-info">
                  {selectedFilter === 'song' ? (
                    <>
                      <strong>{result.trackName}</strong>
                      <br />
                      {result.collectionName}
                      <br />
                      by {result.artistName}
                    </>
                  ) : (
                    result.artistName || result.collectionName
                  )}
                </div>
                <button className='main-button' onClick={() => setSelectedSong(result)}>
                  Add to Playlist
                </button>
                {selectedSong === result && (
                  <PlaylistSelectorPopup
                    playlists={playlists}
                    selectedPlaylists={selectedPlaylists}
                    onSelectPlaylist={(playlistName, isSelected) =>
                      setSelectedPlaylists((prevSelectedPlaylists) =>
                        isSelected
                          ? [...prevSelectedPlaylists, playlistName]
                          : prevSelectedPlaylists.filter(
                              (name) => name !== playlistName
                            )
                      )
                    }
                    onAddToPlaylists={() => handleAddToPlaylist(result)}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;
