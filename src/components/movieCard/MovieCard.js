import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import ButtonProp from '../buttonProp/ButtonProp';

import './Styles.scss';

const MovieCard = ({ movie, checkMovieInList, addMovie, disableBtns, defaultBtnColor }) => {
  return (
    <Grid.Column className="MovieCard">
      <Card
        image={movie.Poster !== "N/A" ? movie.Poster : "./assets/video-placeholder.jpg"}
        header={movie.Title}
        meta={movie.Year}
        extra={
          <ButtonProp 
            color={"blue"}
            btnName={"Nominate"}
            icon="add"
            handleSubmit={() => addMovie(movie)} 
            disable={disableBtns ? true : checkMovieInList(movie.imdbID)}
          />
        }
      />
    </Grid.Column>
  )
}

export default MovieCard;