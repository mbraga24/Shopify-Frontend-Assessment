import React, { useState, useCallback } from 'react';
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

  const addToNominatedList = movie => {
    // console.log("movie --->", movie)
    // const keyName = movie.Title.split(" ").join("")

    setNominatedList([...nominatedList, movie])
    localStorage.setItem(nominatedList, JSON.stringify({ nominatedList }))
    // console.log(keyName)
    // console.log("nominatedList --->", nominatedList)
    // if (!localStorage.getItem(keyName)) {
      // localStorage.setItem(keyName, JSON.stringify({ Title: title, Poster: poster, Year: year }))
      //   console.log(!localStorage.getItem(keyName))
      //   const title = movie.Title
    //   const year = movie.Year
    //   const poster = movie.Poster
    // } 
  }

  return (
    <div>
      <div id="mainWrapper">
        <Nominations nominatedList={nominatedList} addToNominatedList={addToNominatedList} icon={<FontAwesomeIcon icon={faAward} size="4x" />} />
        <SearchBar findMovies={findMovies} icon={<FontAwesomeIcon icon={faFilm} size="4x" />} />
        <SearchResults movieResults={movieResults} addToNominatedList={addToNominatedList} />
      </div>
    </div>
  );
}

export default App;
