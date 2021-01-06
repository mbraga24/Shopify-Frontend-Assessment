import React from "react";
import { List, Button, Image } from 'semantic-ui-react'

import './Styles.scss';

const SearchResults = ({ movieResults = [] }) => {

  console.log(movieResults)

  const displayMovies = () => {
    return movieResults.map(mv => (
      <List key={mv.Title} divided relaxed>
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
            <Button color='blue' className="searchResults__Button" >Nominate</Button>
          </div>
        </List.Item>
      </List>
    ))
  }

  return (
    <div className="searchResults">
      {displayMovies()}
    </div>
  )
}

export default SearchResults;