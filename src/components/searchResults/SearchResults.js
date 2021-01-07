import React from "react";
import ButtonProp from '../buttonProp/ButtonProp';
import { Grid, Card, Image, Divider } from 'semantic-ui-react'

import './Styles.scss';

const SearchResults = ({ movieResults = [], addToNominatedList, disableBtns, icon }) => {

  const list = JSON.parse(localStorage.getItem("list"));

  const checkMovieInList = movieId => {
    return !!list.find(mv => mv.imdbID === movieId);
  }

  const addMovie = movie => {
    addToNominatedList(movie)
  }

  const displayMovies = () => {
    return movieResults.map(mv => (
      <Grid.Column>
        <Card
          image={mv.Poster !== "N/A" ? mv.Poster : "./assets/video-placeholder.jpg"}
          header={mv.Title}
          meta={mv.Year}
          extra={
            <ButtonProp 
              color='blue' 
              btnName={"Nominate"}
              icon="add"
              handleSubmit={() => addMovie(mv)} 
              disable={disableBtns ? true : checkMovieInList(mv.imdbID)}
            />
          }
        />
      </Grid.Column>
    ));
  }

  const resultsBody = true && displayMovies()
  const resultsHeader = true && 
  <>
    <div className="searchResults__header">
      <span className="searchResults__title">Movies</span>
    </div>
    <Divider/>
  </>

  return (
    <div className="searchResults" >
      {resultsHeader}
      <Grid>
        <Grid.Row stackable columns={5}>
          {resultsBody}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default SearchResults;