import React, { useState, useEffect } from 'react';
import Nominations from './components/nominations/Nominations';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss';

function App() {

  const [ movieResults, setMovieResults ] = useState([])

  const fetchMovies = term => {
    let searchTerm = term.split(" ").join("%20")

    console.log("TERM -> ", searchTerm)

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=880b9cc1&s=${searchTerm}`)
    .then(r => r.json())
    .then(data => {
      if (data.Response == "True") {
        setMovieResults(data.Search)
        // displayMovies(data.Search)
      } else {
        console.log("No movies found with that name")
      }
    })
  }

  console.log("movieResults", movieResults)

  return (
    <div>
      <div id="mainWrapper">
        <SearchBar findMovies={fetchMovies} />
        <SearchResults movieResults={movieResults}/>
        <Nominations/>
      </div>
    </div>
  );
}

export default App;
