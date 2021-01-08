import React from "react";
import { Divider } from 'semantic-ui-react'
import MovieCard from '../movieCard/MovieCard'

import './Styles.scss';

const SearchResults = ({ movieResults = [], addToNominatedList, disableBtns, icon, loading }) => {

  let resultsBody;
  const list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []

  const checkMovieInList = movieId => {
    return !!list.find(mv => mv.imdbID === movieId);
  }

  const addMovie = mv => {
    addToNominatedList(mv);
  }

  const displayMovies = () => {
    return movieResults.map(movie => (
      <MovieCard 
        key={movie.imdbID} 
        movie={movie} 
        checkMovieInList={checkMovieInList}
        addMovie={addMovie}
        disableBtns={disableBtns}
        />
    ));
  }

  if (loading) {
    resultsBody = <img className="searchResults__iconLoader" alt="loading" src="./assets/loading.png" />;
  } else {
    resultsBody = 
    <div className="searchResults__gridContainer">
      {displayMovies()}
    </div>;
  }

  return (
    <div className="searchResults" >
      <Divider/>
      <div className="searchResults__innerWrapper">
        {resultsBody}
      </div>
    </div>
  )
}

export default SearchResults;