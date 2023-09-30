import React from 'react';

function FilterBar({ selectedFilter, onFilterChange }) {
  return (
    <div className="filterbar">
      <label>
        <input
          type="radio"
          name="filter"
          value="song"
          checked={selectedFilter === 'song'}
          onChange={() => onFilterChange('song')}
        />
        Song
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="artist"
          checked={selectedFilter === 'artist'}
          onChange={() => onFilterChange('artist')}
        />
        Artist
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="album"
          checked={selectedFilter === 'album'}
          onChange={() => onFilterChange('album')}
        />
        Album
      </label>
    </div>
  );
}

export default FilterBar;
