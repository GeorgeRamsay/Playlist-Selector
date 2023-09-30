import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaylistSelectorPopup from './PlaylistSelectorPopup';

function ITunesChart({ playlists, country = 'us', genre }) {
  const [chartData, setChartData] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  const handleAddToPlaylist = (song) => {
    playlists.forEach((playlist) => {
      if (selectedPlaylists.includes(playlist.name)) {
        const songIndex = playlist.songs.findIndex((s) => s.trackId === song.id.attributes['im:id']);
        if (songIndex === -1) {
          playlist.songs.push({
            trackId: song.id.attributes['im:id'],
            trackName: song['im:name'].label,
            artistName: song['im:artist'].label,
            collectionName: song['im:collection']['im:name'].label,
            artworkUrl100: song['im:image'][2].label,
          });
        }
      }
    });

    setSelectedPlaylists([]);
    setSelectedSong(null);
  };

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        let url;
        if (genre) {
          url = `https://itunes.apple.com/${country}/rss/topsongs/limit=100/genre=${genre}/json`;
        } else {
          url = `https://itunes.apple.com/${country}/rss/topsongs/limit=100/json`;
        }
        const response = await fetch(url);
        const data = await response.json();
        const chartEntries = data.feed.entry;
        setChartData(chartEntries);
      } catch (error) {
        console.error('Error fetching iTunes chart data:', error);
      }
    };

    fetchChartData();
  }, [country, genre]);

  return (
    <div className="ITunesChart">
      <h2>iTunes Top 100 - {country}</h2>
      <div className="song-grid">
        {chartData.map((song, index) => (
          <div key={song.id.attributes['im:id']} className="song-item">
            <span className="song-rank">{index + 1}</span>
            <img src={song['im:image'][2].label} alt="Album cover" className="song-item-image" />
            <div className="song-item-info">
              <div className="song-item-name">{song['im:name'].label}</div>
              <div className="song-item-artist">{song['im:artist'].label}</div>
              <div className="song-item-album">{song['im:collection']['im:name'].label}</div>
            </div>
            <button className="main-button" onClick={() => setSelectedSong(song)}>
              Select Playlists
            </button>
            {selectedSong === song && (
              <PlaylistSelectorPopup
                playlists={playlists}
                selectedPlaylists={selectedPlaylists}
                onSelectPlaylist={(playlistName, isSelected) => {
                  setSelectedPlaylists((prevSelectedPlaylists) =>
                    isSelected
                      ? [...prevSelectedPlaylists, playlistName]
                      : prevSelectedPlaylists.filter((name) => name !== playlistName)
                  );
                }}
                onAddToPlaylists={() => handleAddToPlaylist(song)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ITunesChart;
