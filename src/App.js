import React from 'react';
import Nominations from './components/nominations/Nominations';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

import './styles/App.scss';

function App() {
  return (
    <div>
      <div id="mainWrapper">
        <SearchBar/>
        <SearchResults/>
        <Nominations/>
      </div>
    </div>
  );
}

export default App;
