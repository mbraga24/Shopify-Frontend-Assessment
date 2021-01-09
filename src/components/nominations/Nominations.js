import React, { useState, useEffect } from 'react';
import { Divider } from 'semantic-ui-react'
import MovieCard from "../movieCard/MovieCard";

import Carousel from 'react-elastic-carousel';
import './Styles.scss';

const Nominations = ({ nominatedList = [], removeFromNominatedList, icon, loader }) => {

  const [ showList, setShowList ]   = useState(false)
  const [ localStorageLoad, setLocalStorageLoad ] = useState(true)

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 538, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  const removeMovie = movie => {
    removeFromNominatedList(movie)
  }
  
  // {localStorageLoad ? loader : <Image src={mv.Poster} className="nominations__image" />}

  const displayNominatedList = () => {
    return nominatedList.map(movie => (
        <MovieCard 
          key={movie.imdbID} 
          movie={movie} 
          movieAction={removeMovie}
          btnName={"Remove"}
          iconName={"cancel"}
          loadReady={localStorageLoad} />
    ));
  }

  useEffect(() => {
    if (nominatedList.length > 0) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }, [nominatedList.length, nominatedList])

  useEffect(() => {
    setTimeout(() => {
      setLocalStorageLoad(false)
    }, 1000)
  }, [localStorageLoad])

  const nominationBody = showList && displayNominatedList() 
  const nominationHeader = showList &&  <>
        <div className="nominations__header">
          <div className="nominations__icon">{icon}</div> <h2 className="nominations__title">Your nominations</h2>
        </div>  
        <Divider/>
      </>

  return (
    <div className="nominations">
      {nominationHeader}
      <Carousel breakPoints={breakPoints} className="nominations__carouselContainer" >
        {nominationBody}
      </Carousel>
    </div>
  )
}

export default Nominations;