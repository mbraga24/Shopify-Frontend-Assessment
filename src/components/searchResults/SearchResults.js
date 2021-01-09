import React, { useState, useEffect } from "react";
import { Card, Image, Divider } from 'semantic-ui-react'
import ButtonProp from '../buttonProp/ButtonProp';

import Carousel from 'react-elastic-carousel';
import './Styles.scss';

const SearchResults = ({ movieResults = [], addToNominatedList, disableBtns, loading, loader }) => {

  let searchResultsHeader
  let searchResultsBody;
  const [ showList, setShowList ]   = useState(false)

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 538, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  useEffect(() => {
    if (movieResults.length > 0) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }, [movieResults])

  const addMovie = mv => {
    addToNominatedList(mv);
  }

  const list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []  
  const checkList = movieId => {
    return !!list.find(mv => mv.imdbID === movieId);
  }

  const displayMovies = () => {
    return movieResults.map(movie => (
      <Card key={movie.imdbID} className="searchResults__card">
        <Image src={movie.Poster !== "N/A" ? movie.Poster : "./assets/video-placeholder.jpg"} wrapped ui={false} />
        <Card.Content>
        <Card.Header><span className="searchResults__movieTitle">{movie.Title}</span></Card.Header>
        <Card.Meta>
          <span className='searchResults__movieYear'>Release Year: {movie.Year}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra className="searchResults__btnWrapper">
          <ButtonProp 
            color="blue"
            btnName="Nominate"
            icon="add"
            handleSubmit={() => addMovie(movie)} 
            disable={disableBtns ? true : checkList(movie.imdbID)}
          />
        </Card.Content>
      </Card>
    ))

  }

  searchResultsHeader = showList && <div className="searchResults__header">
                          <h2 className="searchResults__title">Movies</h2>
                          <Divider/>
                        </div>  
  if (loading) {
    searchResultsBody = loader;
  } else {
    searchResultsBody = displayMovies()
  }

  return (
      <div className="searchResults" >
        {searchResultsHeader}
        {
          showList && 
          <Carousel breakPoints={breakPoints} className="searchResults__carousel" >  
            {searchResultsBody}
          </Carousel>
        }
      </div>
  )
}

export default SearchResults;