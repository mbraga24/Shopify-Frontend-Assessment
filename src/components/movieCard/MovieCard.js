import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import ButtonProp from '../buttonProp/ButtonProp';

import './Styles.scss';

const MovieCard = ({ movie, movieAction, btnName, iconName, loadReady = false, disableBtns }) => {
  
  const loader = <img className="App__iconLoader" alt="loading" src="./assets/loading.png" />
  const list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []  
  let src = movie.Poster !== "N/A" ? movie.Poster : "./assets/video-placeholder.jpg";

  const checkMovieInList = movieId => {
    return !!list.find(mv => mv.imdbID === movieId);
  }

  return (
      <Card
        className="movieCard"
        image={loadReady ? loader : src}
        header={movie.Title}
        meta={movie.Year}
        extra={
          <ButtonProp 
            btnName={btnName}
            icon={iconName}
            handleSubmit={() => movieAction(movie)} 
            disable={disableBtns ? true : checkMovieInList(movie.imdbID)}
          />
        }
      />
  )
}

export default MovieCard;