import React from "react";
import { Divider } from 'semantic-ui-react'
import MovieCard from '../movieCard/MovieCard'

import Carousel from 'react-elastic-carousel';
import './Styles.scss';

const SearchResults = ({ movieResults = [], addToNominatedList, disableBtns, loading, loader }) => {

  let resultsBody;

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 538, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  const addMovie = mv => {
    addToNominatedList(mv);
  }

  const displayMovies = () => {
    return movieResults.map(movie => (
      <MovieCard 
        key={movie.imdbID} 
        movie={movie} 
        movieAction={addMovie}
        btnName={"Nominate"}
        iconName={"add"}
        disableBtns={disableBtns} />
    ));
  }

  if (loading) {
    resultsBody = loader;
  } else {
    resultsBody = 
    <Carousel breakPoints={breakPoints} className="searchResults__carouselContainer" >  
      {displayMovies()}
    </Carousel>
  }

  return (
    <div className="searchResults" >
      <Divider/>
      {resultsBody}
    </div>
  )
}

export default SearchResults;