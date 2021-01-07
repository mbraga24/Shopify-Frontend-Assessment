import React from "react";
import ButtonProp from '../buttonProp/ButtonProp';
import { List, Image, Divider } from 'semantic-ui-react'

import './Styles.scss';

const SearchResults = ({ movieResults = [], addToNominatedList }) => {

  const handleClick = movie => {
    addToNominatedList(movie)
  }

  const displayMovies = () => {
    return movieResults.map(mv => (
      <List key={`${mv.Title}--${mv.Poster}`} divided relaxed>
        <List.Item>
          <div className="searchResults__alignItems">
            <List.Content className="searchResults__listContent">
              <Image 
                src={mv.Poster !== "N/A" ? mv.Poster : "./assets/movie_placeholder.png"} 
                className="searchResults__poster"
                size='tiny' 
                verticalAlign='middle' />
              <div className="searchResults__info">
                <List.Header as='a'>{mv.Title}</List.Header>
                <List.Description as='a'>Year: {mv.Year}</List.Description>
              </div>
            </List.Content>
            <ButtonProp 
              color='blue' 
              btnName={"Nominate"}
              handleSubmit={() => handleClick(mv)} 
            />
          </div>
        </List.Item>
      </List>
    ));
  }

  return (
    <div className="searchResults" >
      <h1 className="searchResults__title">Results</h1>
      <Divider/>
      {displayMovies()}
    </div>
  )
}

export default SearchResults;