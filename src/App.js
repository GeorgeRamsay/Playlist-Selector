import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import PlaylistSelector from './PlaylistSelector';
import PlaylistGrid from './PlaylistGrid';
import './styles.css';
import Charts from './Charts';
import ITunesChart from './ITunesChart';
import SignIn from './SignIn';

function App() {
  const [selectedFilter, setSelectedFilter] = React.useState('song');
  const [playlists, setPlaylists] = React.useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = React.useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleRemovePlaylist = (name) => {
    const confirmation = window.confirm(`Are you sure you want to remove playlist ${name}?`);
    if (confirmation) {
      setPlaylists((prevPlaylists) =>
        prevPlaylists.filter((playlist) => playlist.name !== name)
      );
    }
  };

  const handleCreatePlaylist = (name) => {
    setPlaylists((prevPlaylists) => [
      ...prevPlaylists,
      { name, songs: [] },
    ]);
  };

  return (
    <div className="app">
      <Router>
        <TopBar />
        <div className="main">
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <SearchBar
                    selectedFilter={selectedFilter}
                    setPlaylists={setPlaylists}
                    playlists={playlists}
                    selectedPlaylist={selectedPlaylist}
                    setSelectedPlaylist={setSelectedPlaylist}
                  />
                }
              />
              <Route
                path="/playlists"
                element={
                  <>
                    {!selectedPlaylist ? (
                      <>
                        <PlaylistSelector
                          playlists={playlists}
                          onCreatePlaylist={handleCreatePlaylist}
                          onSelectPlaylist={setSelectedPlaylist}
                        />
                        <PlaylistGrid
                          playlists={playlists}
                          onSelectPlaylist={setSelectedPlaylist}
                          onRemovePlaylist={handleRemovePlaylist}
                        />
                      </>
                    ) : (
                      <Playlist
                        playlists={playlists}
                        setPlaylists={setPlaylists}
                        selectedPlaylist={selectedPlaylist}
                        setSelectedPlaylist={setSelectedPlaylist}
                      />
                    )}
                  </>
                }
              />
              <Route path="/charts" element={<Charts/>} />
              <Route path="/ituneschart" element={<ITunesChart playlists={playlists} />} />
              <Route path="/SignIn" element={<SignIn/>} />

              <Route path="/ituneschart/gb" element={<ITunesChart playlists={playlists} country="gb" />} />
              <Route path="/ituneschart/us" element={<ITunesChart playlists={playlists} country="us" />} />
              <Route path="/ituneschart/ca" element={<ITunesChart playlists={playlists} country="ca" />} />
              <Route path="/ituneschart/nz" element={<ITunesChart playlists={playlists} country="nz" />} />
              <Route path="/ituneschart/jp" element={<ITunesChart playlists={playlists} country="jp" />} />
              <Route path="/ituneschart/mx" element={<ITunesChart playlists={playlists} country="mx" />} />
              <Route path="/ituneschart/de" element={<ITunesChart playlists={playlists} country="de" />} />
              <Route path="/ituneschart/fr" element={<ITunesChart playlists={playlists} country="fr" />} />
              <Route path="/ituneschart/es" element={<ITunesChart playlists={playlists} country="es" />} />
              <Route path="/ituneschart/rock" element={<ITunesChart playlists={playlists} country="us" genre={21} />}/>
              <Route path="/ituneschart/childrens" element={<ITunesChart playlists={playlists} country="us" genre={4} />}/>
              <Route path="/ituneschart/classical" element={<ITunesChart playlists={playlists} country="us" genre={5} />}/>
              <Route path="/ituneschart/electronic" element={<ITunesChart playlists={playlists} country="us" genre={7} />}/>
              <Route path="/ituneschart/holiday" element={<ITunesChart playlists={playlists} country="us" genre={8} />}/>
              <Route path="/ituneschart/jazz" element={<ITunesChart playlists={playlists} country="us" genre={11} />}/>
              <Route path="/ituneschart/kpop" element={<ITunesChart playlists={playlists} country="us" genre={14} />}/>
              <Route path="/ituneschart/RandB" element={<ITunesChart playlists={playlists} country="us" genre={15} />}/>
              <Route path="/ituneschart/dance" element={<ITunesChart playlists={playlists} country="us" genre={17} />}/>
              <Route path="/ituneschart/hiphopandrap" element={<ITunesChart playlists={playlists} country="us" genre={18} />}/>
              <Route path="/ituneschart/alternative" element={<ITunesChart playlists={playlists} country="us" genre={20} />}/>
              <Route path="/ituneschart/reggae" element={<ITunesChart playlists={playlists} country="us" genre={24} />}/>
              <Route path="/ituneschart/jpop" element={<ITunesChart playlists={playlists} country="us" genre={27} />}/>

            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
