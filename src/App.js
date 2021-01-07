import React, { useState, useCallback, useEffect } from 'react';
import Nominations from './components/nominations/Nominations';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faTape, faFilm } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss';

function App() {

  const [ movieResults, setMovieResults ] = useState([])
  const [ nominatedList, setNominatedList ] = useState([])
  // const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("list")) {
      let nominatedList = JSON.parse(localStorage.getItem("list")) 
      setNominatedList([...nominatedList])
    } 
  }, [])
  
  const findMovies = useCallback((term) => {
    // setLoading(true)
    let searchTerm = term.split(" ").join("%20")

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=880b9cc1&s=${searchTerm}`)
    .then(r => r.json())
    .then(data => {
      if (data.Response === "True") {
        setMovieResults(data.Search)
      } else {
        console.log("NOT FOUND")
      }
    })
  }, [])

  const removeFroNominatedList = movie => {
    console.log("movie --->", movie.imdbID)
    if (nominatedList.includes(movie)) {
      const filteredList = nominatedList.filter(mv => mv.imdbID !== movie.imdbID)
      setNominatedList([...filteredList])
      localStorage.setItem("list", JSON.stringify([...nominatedList]))
    }
  }

  const addToNominatedList = movie => {
    if (!nominatedList.includes(movie)) {
      setNominatedList([...nominatedList, movie])
      // console.log("nominatedList -->", nominatedList)
      localStorage.setItem("list", JSON.stringify([...nominatedList]))
    }
  }

  return (
    <div>
      <div id="mainWrapper">
        <Nominations 
          nominatedList={nominatedList} 
          removeFroNominatedList={removeFroNominatedList}
          icon={<FontAwesomeIcon icon={faAward} size="4x" />} />
        <SearchBar 
          findMovies={findMovies} 
          icon={<FontAwesomeIcon icon={faFilm} size="4x" />} />
        <SearchResults 
          movieResults={movieResults} 
          nominatedList={nominatedList}
          addToNominatedList={addToNominatedList} />
      </div>
    </div>
  );
}

export default App;
